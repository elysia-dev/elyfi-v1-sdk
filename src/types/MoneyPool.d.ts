import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MoneyPoolInterface extends ethers.utils.Interface {
  functions: {
    "activateMoneyPool(address)": FunctionFragment;
    "addNewReserve(address,address,address,address,address,address,uint256)": FunctionFragment;
    "borrow(address,uint256)": FunctionFragment;
    "deactivateMoneyPool(address)": FunctionFragment;
    "deposit(address,address,uint256)": FunctionFragment;
    "getLTokenInterestIndex(address)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "liquidate(address,uint256)": FunctionFragment;
    "pauseMoneyPool(address)": FunctionFragment;
    "repay(address,uint256)": FunctionFragment;
    "unPauseMoneyPool(address)": FunctionFragment;
    "updateIncentivePool(address,address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activateMoneyPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addNewReserve",
    values: [string, string, string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateMoneyPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLTokenInterestIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseMoneyPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unPauseMoneyPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIncentivePool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateMoneyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addNewReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deactivateMoneyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLTokenInterestIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseMoneyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unPauseMoneyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIncentivePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Borrow(address,address,address,uint256,uint256,uint256)": EventFragment;
    "Deposit(address,address,uint256)": EventFragment;
    "Liquidation(address,address,uint256,uint256,uint256)": EventFragment;
    "NewReserve(address,address,address,address,address,address,uint256)": EventFragment;
    "Repay(address,address,uint256,uint256,uint256)": EventFragment;
    "Withdraw(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class MoneyPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MoneyPoolInterface;

  functions: {
    activateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addNewReserve(
      asset: string,
      lToken: string,
      dToken: string,
      interestModel: string,
      tokenizer: string,
      incentivePool: string,
      moneyPoolFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrow(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deactivateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLTokenInterestIndex(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          string,
          number,
          boolean,
          boolean
        ] & {
          moneyPoolFactor: BigNumber;
          lTokenInterestIndex: BigNumber;
          borrowAPY: BigNumber;
          depositAPY: BigNumber;
          lastUpdateTimestamp: BigNumber;
          lTokenAddress: string;
          dTokenAddress: string;
          interestModelAddress: string;
          tokenizerAddress: string;
          id: number;
          isPaused: boolean;
          isActivated: boolean;
        }
      ]
    >;

    liquidate(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unPauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIncentivePool(
      asset: string,
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activateMoneyPool(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addNewReserve(
    asset: string,
    lToken: string,
    dToken: string,
    interestModel: string,
    tokenizer: string,
    incentivePool: string,
    moneyPoolFactor_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrow(
    asset: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deactivateMoneyPool(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    asset: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLTokenInterestIndex(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReserveData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      string,
      string,
      number,
      boolean,
      boolean
    ] & {
      moneyPoolFactor: BigNumber;
      lTokenInterestIndex: BigNumber;
      borrowAPY: BigNumber;
      depositAPY: BigNumber;
      lastUpdateTimestamp: BigNumber;
      lTokenAddress: string;
      dTokenAddress: string;
      interestModelAddress: string;
      tokenizerAddress: string;
      id: number;
      isPaused: boolean;
      isActivated: boolean;
    }
  >;

  liquidate(
    asset: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseMoneyPool(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay(
    asset: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unPauseMoneyPool(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIncentivePool(
    asset: string,
    newIncentivePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    asset: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateMoneyPool(asset: string, overrides?: CallOverrides): Promise<void>;

    addNewReserve(
      asset: string,
      lToken: string,
      dToken: string,
      interestModel: string,
      tokenizer: string,
      incentivePool: string,
      moneyPoolFactor_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    borrow(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateMoneyPool(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getLTokenInterestIndex(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        number,
        boolean,
        boolean
      ] & {
        moneyPoolFactor: BigNumber;
        lTokenInterestIndex: BigNumber;
        borrowAPY: BigNumber;
        depositAPY: BigNumber;
        lastUpdateTimestamp: BigNumber;
        lTokenAddress: string;
        dTokenAddress: string;
        interestModelAddress: string;
        tokenizerAddress: string;
        id: number;
        isPaused: boolean;
        isActivated: boolean;
      }
    >;

    liquidate(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pauseMoneyPool(asset: string, overrides?: CallOverrides): Promise<void>;

    repay(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unPauseMoneyPool(asset: string, overrides?: CallOverrides): Promise<void>;

    updateIncentivePool(
      asset: string,
      newIncentivePool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Borrow(
      asset?: string | null,
      collateralServiceProvider?: string | null,
      borrower?: string | null,
      tokenId?: null,
      borrowAPY?: null,
      borrowAmount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        asset: string;
        collateralServiceProvider: string;
        borrower: string;
        tokenId: BigNumber;
        borrowAPY: BigNumber;
        borrowAmount: BigNumber;
      }
    >;

    Deposit(
      asset?: string | null,
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { asset: string; account: string; amount: BigNumber }
    >;

    Liquidation(
      asset?: string | null,
      borrower?: string | null,
      tokenId?: null,
      userDTokenBalance?: null,
      feeOnCollateralServiceProvider?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        asset: string;
        borrower: string;
        tokenId: BigNumber;
        userDTokenBalance: BigNumber;
        feeOnCollateralServiceProvider: BigNumber;
      }
    >;

    NewReserve(
      asset?: string | null,
      lToken?: null,
      dToken?: null,
      interestModel?: null,
      tokenizer?: null,
      incentivePool?: null,
      moneyPoolFactor?: null
    ): TypedEventFilter<
      [string, string, string, string, string, string, BigNumber],
      {
        asset: string;
        lToken: string;
        dToken: string;
        interestModel: string;
        tokenizer: string;
        incentivePool: string;
        moneyPoolFactor: BigNumber;
      }
    >;

    Repay(
      asset?: string | null,
      borrower?: string | null,
      tokenId?: null,
      userDTokenBalance?: null,
      feeOnCollateralServiceProvider?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        asset: string;
        borrower: string;
        tokenId: BigNumber;
        userDTokenBalance: BigNumber;
        feeOnCollateralServiceProvider: BigNumber;
      }
    >;

    Withdraw(
      asset?: string | null,
      account?: string | null,
      to?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { asset: string; account: string; to: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    activateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addNewReserve(
      asset: string,
      lToken: string,
      dToken: string,
      interestModel: string,
      tokenizer: string,
      incentivePool: string,
      moneyPoolFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrow(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deactivateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLTokenInterestIndex(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unPauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIncentivePool(
      asset: string,
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addNewReserve(
      asset: string,
      lToken: string,
      dToken: string,
      interestModel: string,
      tokenizer: string,
      incentivePool: string,
      moneyPoolFactor_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrow(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deactivateMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLTokenInterestIndex(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      asset: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unPauseMoneyPool(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIncentivePool(
      asset: string,
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      asset: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

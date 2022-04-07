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

interface StakingPoolInterface extends ethers.utils.Interface {
  functions: {
    "claim(uint8)": FunctionFragment;
    "currentRound()": FunctionFragment;
    "getPoolData(uint8)": FunctionFragment;
    "getRewardIndex(uint8)": FunctionFragment;
    "getUserData(uint8,address)": FunctionFragment;
    "getUserReward(address,uint8)": FunctionFragment;
    "initNewRound(uint256,uint16,uint8,uint8,uint8)": FunctionFragment;
    "migrate(uint256,uint8)": FunctionFragment;
    "retrieveResidue()": FunctionFragment;
    "rewardAsset()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakingAsset()": FunctionFragment;
    "withdraw(uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "currentRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserData",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initNewRound",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveResidue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardAsset",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakingAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initNewRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveResidue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Claim(address,uint256,uint256,uint8)": EventFragment;
    "InitRound(uint256,uint256,uint256,uint256)": EventFragment;
    "Migrate(address,uint256,uint8,uint8)": EventFragment;
    "Stake(address,uint256,uint256,uint256,uint8)": EventFragment;
    "Withdraw(address,uint256,uint256,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitRound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class StakingPool extends BaseContract {
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

  interface: StakingPoolInterface;

  functions: {
    claim(
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentRound(overrides?: CallOverrides): Promise<[number]>;

    getPoolData(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        rewardPerSecond: BigNumber;
        rewardIndex: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
        totalPrincipal: BigNumber;
        lastUpdateTimestamp: BigNumber;
      }
    >;

    getRewardIndex(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserData(
      round: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        userIndex: BigNumber;
        userReward: BigNumber;
        userPrincipal: BigNumber;
      }
    >;

    getUserReward(
      user: string,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initNewRound(
      rewardPerSecond: BigNumberish,
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrate(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    retrieveResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardAsset(overrides?: CallOverrides): Promise<[string]>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingAsset(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    round: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentRound(overrides?: CallOverrides): Promise<number>;

  getPoolData(
    round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      rewardPerSecond: BigNumber;
      rewardIndex: BigNumber;
      startTimestamp: BigNumber;
      endTimestamp: BigNumber;
      totalPrincipal: BigNumber;
      lastUpdateTimestamp: BigNumber;
    }
  >;

  getRewardIndex(
    round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserData(
    round: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      userIndex: BigNumber;
      userReward: BigNumber;
      userPrincipal: BigNumber;
    }
  >;

  getUserReward(
    user: string,
    round: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initNewRound(
    rewardPerSecond: BigNumberish,
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrate(
    amount: BigNumberish,
    round: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  retrieveResidue(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardAsset(overrides?: CallOverrides): Promise<string>;

  stake(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingAsset(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    round: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(round: BigNumberish, overrides?: CallOverrides): Promise<void>;

    currentRound(overrides?: CallOverrides): Promise<number>;

    getPoolData(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        rewardPerSecond: BigNumber;
        rewardIndex: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
        totalPrincipal: BigNumber;
        lastUpdateTimestamp: BigNumber;
      }
    >;

    getRewardIndex(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserData(
      round: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        userIndex: BigNumber;
        userReward: BigNumber;
        userPrincipal: BigNumber;
      }
    >;

    getUserReward(
      user: string,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initNewRound(
      rewardPerSecond: BigNumberish,
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    migrate(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    retrieveResidue(overrides?: CallOverrides): Promise<void>;

    rewardAsset(overrides?: CallOverrides): Promise<string>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakingAsset(overrides?: CallOverrides): Promise<string>;

    withdraw(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claim(
      user?: string | null,
      reward?: null,
      rewardLeft?: null,
      currentRound?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, number],
      {
        user: string;
        reward: BigNumber;
        rewardLeft: BigNumber;
        currentRound: number;
      }
    >;

    InitRound(
      rewardPerSecond?: null,
      startTimestamp?: null,
      endTimestamp?: null,
      currentRound?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        rewardPerSecond: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
        currentRound: BigNumber;
      }
    >;

    Migrate(
      user?: null,
      amount?: null,
      migrateRound?: null,
      currentRound?: null
    ): TypedEventFilter<
      [string, BigNumber, number, number],
      {
        user: string;
        amount: BigNumber;
        migrateRound: number;
        currentRound: number;
      }
    >;

    Stake(
      user?: string | null,
      amount?: null,
      userIndex?: null,
      userPrincipal?: null,
      currentRound?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, number],
      {
        user: string;
        amount: BigNumber;
        userIndex: BigNumber;
        userPrincipal: BigNumber;
        currentRound: number;
      }
    >;

    Withdraw(
      user?: string | null,
      amount?: null,
      userIndex?: null,
      userPrincipal?: null,
      currentRound?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, number],
      {
        user: string;
        amount: BigNumber;
        userIndex: BigNumber;
        userPrincipal: BigNumber;
        currentRound: number;
      }
    >;
  };

  estimateGas: {
    claim(
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolData(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardIndex(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserData(
      round: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReward(
      user: string,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initNewRound(
      rewardPerSecond: BigNumberish,
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrate(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    retrieveResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardAsset(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolData(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardIndex(
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserData(
      round: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReward(
      user: string,
      round: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initNewRound(
      rewardPerSecond: BigNumberish,
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrate(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    retrieveResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      round: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
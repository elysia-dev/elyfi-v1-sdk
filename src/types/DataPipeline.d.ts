import {
  ethers,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DataPipelineInterface extends ethers.utils.Interface {
  functions: {
    "getAssetBondStateData(address,uint256)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getUserData(address,address)": FunctionFragment;
    "moneyPool()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetBondStateData",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserData",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "moneyPool", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getAssetBondStateData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "moneyPool", data: BytesLike): Result;

  events: {};
}

export class DataPipeline extends BaseContract {
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

  interface: DataPipelineInterface;

  functions: {
    getAssetBondStateData(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, string, BigNumber, BigNumber] & {
          assetBondState: number;
          tokenOwner: string;
          debtOnMoneyPool: BigNumber;
          feeOnCollateralServiceProvider: BigNumber;
        }
      ]
    >;

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
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          totalLTokenSupply: BigNumber;
          implicitLTokenSupply: BigNumber;
          lTokenInterestIndex: BigNumber;
          principalDTokenSupply: BigNumber;
          totalDTokenSupply: BigNumber;
          averageRealAssetBorrowRate: BigNumber;
          dTokenLastUpdateTimestamp: BigNumber;
          borrowAPY: BigNumber;
          depositAPY: BigNumber;
          moneyPooLastUpdateTimestamp: BigNumber;
        }
      ]
    >;

    getUserData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          underlyingAssetBalance: BigNumber;
          lTokenBalance: BigNumber;
          implicitLtokenBalance: BigNumber;
          dTokenBalance: BigNumber;
          principalDTokenBalance: BigNumber;
          averageRealAssetBorrowRate: BigNumber;
          lastUpdateTimestamp: BigNumber;
        }
      ]
    >;

    moneyPool(overrides?: CallOverrides): Promise<[string]>;
  };

  getAssetBondStateData(
    asset: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, BigNumber, BigNumber] & {
      assetBondState: number;
      tokenOwner: string;
      debtOnMoneyPool: BigNumber;
      feeOnCollateralServiceProvider: BigNumber;
    }
  >;

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
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      totalLTokenSupply: BigNumber;
      implicitLTokenSupply: BigNumber;
      lTokenInterestIndex: BigNumber;
      principalDTokenSupply: BigNumber;
      totalDTokenSupply: BigNumber;
      averageRealAssetBorrowRate: BigNumber;
      dTokenLastUpdateTimestamp: BigNumber;
      borrowAPY: BigNumber;
      depositAPY: BigNumber;
      moneyPooLastUpdateTimestamp: BigNumber;
    }
  >;

  getUserData(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      underlyingAssetBalance: BigNumber;
      lTokenBalance: BigNumber;
      implicitLtokenBalance: BigNumber;
      dTokenBalance: BigNumber;
      principalDTokenBalance: BigNumber;
      averageRealAssetBorrowRate: BigNumber;
      lastUpdateTimestamp: BigNumber;
    }
  >;

  moneyPool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAssetBondStateData(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber, BigNumber] & {
        assetBondState: number;
        tokenOwner: string;
        debtOnMoneyPool: BigNumber;
        feeOnCollateralServiceProvider: BigNumber;
      }
    >;

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
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        totalLTokenSupply: BigNumber;
        implicitLTokenSupply: BigNumber;
        lTokenInterestIndex: BigNumber;
        principalDTokenSupply: BigNumber;
        totalDTokenSupply: BigNumber;
        averageRealAssetBorrowRate: BigNumber;
        dTokenLastUpdateTimestamp: BigNumber;
        borrowAPY: BigNumber;
        depositAPY: BigNumber;
        moneyPooLastUpdateTimestamp: BigNumber;
      }
    >;

    getUserData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        underlyingAssetBalance: BigNumber;
        lTokenBalance: BigNumber;
        implicitLtokenBalance: BigNumber;
        dTokenBalance: BigNumber;
        principalDTokenBalance: BigNumber;
        averageRealAssetBorrowRate: BigNumber;
        lastUpdateTimestamp: BigNumber;
      }
    >;

    moneyPool(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAssetBondStateData(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moneyPool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetBondStateData(
      asset: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserData(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    moneyPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

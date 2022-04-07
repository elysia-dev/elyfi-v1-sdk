import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AssetBondInterface extends ethers.utils.Interface {
  functions: {
    "getAssetBondDebtData(tuple)": FunctionFragment;
    "parseAssetBondId(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetBondDebtData",
    values: [
      {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "parseAssetBondId",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetBondDebtData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseAssetBondId",
    data: BytesLike
  ): Result;

  events: {};
}

export class AssetBond extends BaseContract {
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

  interface: AssetBondInterface;

  functions: {
    getAssetBondDebtData(
      assetBondData: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    parseAssetBondId(
      tokenId: BigNumberish,
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
          nonce: BigNumber;
          countryCode: BigNumber;
          collateralServiceProviderIdentificationNumber: BigNumber;
          collateralLatitude: BigNumber;
          collateralLatitudeSign: BigNumber;
          collateralLongitude: BigNumber;
          collateralLongitudeSign: BigNumber;
          collateralDetail: BigNumber;
          collateralCategory: BigNumber;
          productNumber: BigNumber;
        }
      ]
    >;
  };

  getAssetBondDebtData(
    assetBondData: {
      state: BigNumberish;
      borrower: string;
      signer: string;
      collateralServiceProvider: string;
      principal: BigNumberish;
      debtCeiling: BigNumberish;
      couponRate: BigNumberish;
      interestRate: BigNumberish;
      delinquencyRate: BigNumberish;
      loanStartTimestamp: BigNumberish;
      collateralizeTimestamp: BigNumberish;
      maturityTimestamp: BigNumberish;
      liquidationTimestamp: BigNumberish;
      ipfsHash: string;
      signerOpinionHash: string;
    },
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  parseAssetBondId(
    tokenId: BigNumberish,
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
      nonce: BigNumber;
      countryCode: BigNumber;
      collateralServiceProviderIdentificationNumber: BigNumber;
      collateralLatitude: BigNumber;
      collateralLatitudeSign: BigNumber;
      collateralLongitude: BigNumber;
      collateralLongitudeSign: BigNumber;
      collateralDetail: BigNumber;
      collateralCategory: BigNumber;
      productNumber: BigNumber;
    }
  >;

  callStatic: {
    getAssetBondDebtData(
      assetBondData: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    parseAssetBondId(
      tokenId: BigNumberish,
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
        nonce: BigNumber;
        countryCode: BigNumber;
        collateralServiceProviderIdentificationNumber: BigNumber;
        collateralLatitude: BigNumber;
        collateralLatitudeSign: BigNumber;
        collateralLongitude: BigNumber;
        collateralLongitudeSign: BigNumber;
        collateralDetail: BigNumber;
        collateralCategory: BigNumber;
        productNumber: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getAssetBondDebtData(
      assetBondData: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseAssetBondId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetBondDebtData(
      assetBondData: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseAssetBondId(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

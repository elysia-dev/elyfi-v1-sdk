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

interface TokenizerInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "collateralizeAssetBond(address,uint256,uint256,uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getAssetBondData(uint256)": FunctionFragment;
    "getAssetBondDebtData(uint256)": FunctionFragment;
    "getAssetBondIdData(uint256)": FunctionFragment;
    "getMinter(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "liquidateAssetBond(address,uint256)": FunctionFragment;
    "mintAssetBond(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "releaseAssetBond(address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "settleAssetBond(address,address,uint256,uint256,uint256,uint256,uint256,uint16,uint16,uint8,uint8,string)": FunctionFragment;
    "signAssetBond(uint256,string)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "collateralizeAssetBond",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetBondData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetBondDebtData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetBondIdData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinter",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateAssetBond",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAssetBond",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseAssetBond",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "settleAssetBond",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "signAssetBond",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralizeAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetBondData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetBondDebtData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetBondIdData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signAssetBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "AssetBondCollateralized(address,uint256,uint256,uint256)": EventFragment;
    "AssetBondLiquidated(address,uint256)": EventFragment;
    "AssetBondReleased(address,uint256)": EventFragment;
    "AssetBondSettled(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string)": EventFragment;
    "AssetBondSigned(address,uint256,string)": EventFragment;
    "EmptyAssetBondMinted(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetBondCollateralized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetBondLiquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetBondReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetBondSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetBondSigned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmptyAssetBondMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class Tokenizer extends BaseContract {
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

  interface: TokenizerInterface;

  functions: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    collateralizeAssetBond(
      account: string,
      tokenId: BigNumberish,
      borrowAmount: BigNumberish,
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAssetBondData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          number,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          string
        ] & {
          state: number;
          borrower: string;
          signer: string;
          collateralServiceProvider: string;
          principal: BigNumber;
          debtCeiling: BigNumber;
          couponRate: BigNumber;
          interestRate: BigNumber;
          delinquencyRate: BigNumber;
          loanStartTimestamp: BigNumber;
          collateralizeTimestamp: BigNumber;
          maturityTimestamp: BigNumber;
          liquidationTimestamp: BigNumber;
          ipfsHash: string;
          signerOpinionHash: string;
        }
      ]
    >;

    getAssetBondDebtData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getAssetBondIdData(
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

    getMinter(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidateAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    releaseAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleAssetBond(
      borrower: string,
      signer: string,
      tokenId: BigNumberish,
      principal: BigNumberish,
      couponRate: BigNumberish,
      delinquencyRate: BigNumberish,
      debtCeiling: BigNumberish,
      loanDuration: BigNumberish,
      loanStartTimeYear: BigNumberish,
      loanStartTimeMonth: BigNumberish,
      loanStartTimeDay: BigNumberish,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signAssetBond(
      tokenId: BigNumberish,
      signerOpinionHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  collateralizeAssetBond(
    account: string,
    tokenId: BigNumberish,
    borrowAmount: BigNumberish,
    interestRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAssetBondData(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string
    ] & {
      state: number;
      borrower: string;
      signer: string;
      collateralServiceProvider: string;
      principal: BigNumber;
      debtCeiling: BigNumber;
      couponRate: BigNumber;
      interestRate: BigNumber;
      delinquencyRate: BigNumber;
      loanStartTimestamp: BigNumber;
      collateralizeTimestamp: BigNumber;
      maturityTimestamp: BigNumber;
      liquidationTimestamp: BigNumber;
      ipfsHash: string;
      signerOpinionHash: string;
    }
  >;

  getAssetBondDebtData(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getAssetBondIdData(
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

  getMinter(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  liquidateAssetBond(
    account: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAssetBond(
    account: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  releaseAssetBond(
    account: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleAssetBond(
    borrower: string,
    signer: string,
    tokenId: BigNumberish,
    principal: BigNumberish,
    couponRate: BigNumberish,
    delinquencyRate: BigNumberish,
    debtCeiling: BigNumberish,
    loanDuration: BigNumberish,
    loanStartTimeYear: BigNumberish,
    loanStartTimeMonth: BigNumberish,
    loanStartTimeDay: BigNumberish,
    ipfsHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signAssetBond(
    tokenId: BigNumberish,
    signerOpinionHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    collateralizeAssetBond(
      account: string,
      tokenId: BigNumberish,
      borrowAmount: BigNumberish,
      interestRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAssetBondData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        state: number;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumber;
        debtCeiling: BigNumber;
        couponRate: BigNumber;
        interestRate: BigNumber;
        delinquencyRate: BigNumber;
        loanStartTimestamp: BigNumber;
        collateralizeTimestamp: BigNumber;
        maturityTimestamp: BigNumber;
        liquidationTimestamp: BigNumber;
        ipfsHash: string;
        signerOpinionHash: string;
      }
    >;

    getAssetBondDebtData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getAssetBondIdData(
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

    getMinter(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidateAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    releaseAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    settleAssetBond(
      borrower: string,
      signer: string,
      tokenId: BigNumberish,
      principal: BigNumberish,
      couponRate: BigNumberish,
      delinquencyRate: BigNumberish,
      debtCeiling: BigNumberish,
      loanDuration: BigNumberish,
      loanStartTimeYear: BigNumberish,
      loanStartTimeMonth: BigNumberish,
      loanStartTimeDay: BigNumberish,
      ipfsHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    signAssetBond(
      tokenId: BigNumberish,
      signerOpinionHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; approved: string; tokenId: BigNumber }
    >;

    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { owner: string; operator: string; approved: boolean }
    >;

    AssetBondCollateralized(
      account?: string | null,
      tokenId?: null,
      borrowAmount?: null,
      interestRate?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        account: string;
        tokenId: BigNumber;
        borrowAmount: BigNumber;
        interestRate: BigNumber;
      }
    >;

    AssetBondLiquidated(
      liquidator?: string | null,
      tokenId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { liquidator: string; tokenId: BigNumber }
    >;

    AssetBondReleased(
      borrower?: string | null,
      tokenId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { borrower: string; tokenId: BigNumber }
    >;

    AssetBondSettled(
      borrower?: string | null,
      signer?: string | null,
      tokenId?: null,
      principal?: null,
      couponRate?: null,
      delinquencyRate?: null,
      debtCeiling?: null,
      maturityTimestamp?: null,
      liquidationTimestamp?: null,
      loanStartTimestamp?: null,
      ifpsHash?: null
    ): TypedEventFilter<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ],
      {
        borrower: string;
        signer: string;
        tokenId: BigNumber;
        principal: BigNumber;
        couponRate: BigNumber;
        delinquencyRate: BigNumber;
        debtCeiling: BigNumber;
        maturityTimestamp: BigNumber;
        liquidationTimestamp: BigNumber;
        loanStartTimestamp: BigNumber;
        ifpsHash: string;
      }
    >;

    AssetBondSigned(
      signer?: string | null,
      tokenId?: null,
      signerOpinionHash?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { signer: string; tokenId: BigNumber; signerOpinionHash: string }
    >;

    EmptyAssetBondMinted(
      account?: string | null,
      tokenId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; tokenId: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; tokenId: BigNumber }
    >;
  };

  estimateGas: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    collateralizeAssetBond(
      account: string,
      tokenId: BigNumberish,
      borrowAmount: BigNumberish,
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetBondData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetBondDebtData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetBondIdData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinter(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidateAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    releaseAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleAssetBond(
      borrower: string,
      signer: string,
      tokenId: BigNumberish,
      principal: BigNumberish,
      couponRate: BigNumberish,
      delinquencyRate: BigNumberish,
      debtCeiling: BigNumberish,
      loanDuration: BigNumberish,
      loanStartTimeYear: BigNumberish,
      loanStartTimeMonth: BigNumberish,
      loanStartTimeDay: BigNumberish,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signAssetBond(
      tokenId: BigNumberish,
      signerOpinionHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralizeAssetBond(
      account: string,
      tokenId: BigNumberish,
      borrowAmount: BigNumberish,
      interestRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetBondData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetBondDebtData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetBondIdData(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinter(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidateAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releaseAssetBond(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleAssetBond(
      borrower: string,
      signer: string,
      tokenId: BigNumberish,
      principal: BigNumberish,
      couponRate: BigNumberish,
      delinquencyRate: BigNumberish,
      debtCeiling: BigNumberish,
      loanDuration: BigNumberish,
      loanStartTimeYear: BigNumberish,
      loanStartTimeMonth: BigNumberish,
      loanStartTimeDay: BigNumberish,
      ipfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signAssetBond(
      tokenId: BigNumberish,
      signerOpinionHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

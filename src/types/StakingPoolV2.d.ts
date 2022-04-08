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

interface StakingPoolV2Interface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "checkpoints(address,uint32)": FunctionFragment;
    "claim()": FunctionFragment;
    "closePool()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "getPastTotalSupply(uint256)": FunctionFragment;
    "getPastVotes(address,uint256)": FunctionFragment;
    "getPoolData()": FunctionFragment;
    "getRewardIndex()": FunctionFragment;
    "getUserData(address)": FunctionFragment;
    "getUserReward(address)": FunctionFragment;
    "getVotes(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initNewPool(uint256,uint256,uint32)": FunctionFragment;
    "inputNextReward(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "numCheckpoints(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "retrieveResidue()": FunctionFragment;
    "rewardAsset()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakingAsset()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "underlying()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "checkpoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "closePool", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "delegateBySig",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "delegates", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPastTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getUserData", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getUserReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initNewPool",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "inputNextReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "numCheckpoints",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
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
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPastTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotes",
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
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initNewPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inputNextReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Claim(address,uint256,uint256)": EventFragment;
    "DelegateChanged(address,address,address)": EventFragment;
    "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
    "InitPool(uint256,uint256,uint256)": EventFragment;
    "Migrate(address,uint256)": EventFragment;
    "Stake(address,uint256,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class StakingPoolV2 extends BaseContract {
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

  interface: StakingPoolV2Interface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    checkpoints(
      account: string,
      pos: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[number, BigNumber] & { fromBlock: number; votes: BigNumber }]>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegates(account: string, overrides?: CallOverrides): Promise<[string]>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolData(
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

    getRewardIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserData(
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
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initNewPool(
      rewardPerSecond: BigNumberish,
      startTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    inputNextReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    numCheckpoints(
      account: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
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

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  checkpoints(
    account: string,
    pos: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { fromBlock: number; votes: BigNumber }>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closePool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegate(
    delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegates(account: string, overrides?: CallOverrides): Promise<string>;

  getPastTotalSupply(
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPastVotes(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolData(
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

  getRewardIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getUserData(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      userIndex: BigNumber;
      userReward: BigNumber;
      userPrincipal: BigNumber;
    }
  >;

  getUserReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initNewPool(
    rewardPerSecond: BigNumberish,
    startTimestamp: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  inputNextReward(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
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

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    checkpoints(
      account: string,
      pos: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { fromBlock: number; votes: BigNumber }>;

    claim(overrides?: CallOverrides): Promise<void>;

    closePool(overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(account: string, overrides?: CallOverrides): Promise<string>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolData(
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

    getRewardIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getUserData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        userIndex: BigNumber;
        userReward: BigNumber;
        userPrincipal: BigNumber;
      }
    >;

    getUserReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initNewPool(
      rewardPerSecond: BigNumberish,
      startTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    inputNextReward(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    retrieveResidue(overrides?: CallOverrides): Promise<void>;

    rewardAsset(overrides?: CallOverrides): Promise<string>;

    stake(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakingAsset(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    underlying(overrides?: CallOverrides): Promise<string>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Claim(
      user?: string | null,
      reward?: null,
      rewardLeft?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; reward: BigNumber; rewardLeft: BigNumber }
    >;

    DelegateChanged(
      delegator?: string | null,
      fromDelegate?: string | null,
      toDelegate?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { delegator: string; fromDelegate: string; toDelegate: string }
    >;

    DelegateVotesChanged(
      delegate?: string | null,
      previousBalance?: null,
      newBalance?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { delegate: string; previousBalance: BigNumber; newBalance: BigNumber }
    >;

    InitPool(
      rewardPerSecond?: null,
      startTimestamp?: null,
      endTimestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        rewardPerSecond: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
      }
    >;

    Migrate(
      user?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Stake(
      user?: string | null,
      amount?: null,
      userIndex?: null,
      userPrincipal?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        amount: BigNumber;
        userIndex: BigNumber;
        userPrincipal: BigNumber;
      }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Withdraw(
      user?: string | null,
      amount?: null,
      userIndex?: null,
      userPrincipal?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        user: string;
        amount: BigNumber;
        userIndex: BigNumber;
        userPrincipal: BigNumber;
      }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    checkpoints(
      account: string,
      pos: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolData(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getUserData(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUserReward(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initNewPool(
      rewardPerSecond: BigNumberish,
      startTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    inputNextReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    numCheckpoints(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
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

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpoints(
      account: string,
      pos: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closePool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastTotalSupply(
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPastVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserData(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReward(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotes(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initNewPool(
      rewardPerSecond: BigNumberish,
      startTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    inputNextReward(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numCheckpoints(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
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

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

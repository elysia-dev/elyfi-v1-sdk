import {
  Signer,
  Contract,
  ContractFactory,
} from "ethers";
import { Provider } from "@ethersproject/providers";
import type { MoneyPool } from "../MoneyPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxReserveCount_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "collateralServiceProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAPY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userDTokenBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeOnCollateralServiceProvider",
        type: "uint256",
      },
    ],
    name: "Liquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "interestModel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenizer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivePool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "moneyPoolFactor",
        type: "uint256",
      },
    ],
    name: "NewReserve",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userDTokenBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeOnCollateralServiceProvider",
        type: "uint256",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "activateMoneyPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "lToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "interestModel",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenizer",
        type: "address",
      },
      {
        internalType: "address",
        name: "incentivePool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "moneyPoolFactor_",
        type: "uint256",
      },
    ],
    name: "addNewReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "deactivateMoneyPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getLTokenInterestIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "moneyPoolFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lTokenInterestIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTimestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "dTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "interestModelAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenizerAddress",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActivated",
            type: "bool",
          },
        ],
        internalType: "struct DataStruct.ReserveData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "pauseMoneyPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "unPauseMoneyPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "newIncentivePool",
        type: "address",
      },
    ],
    name: "updateIncentivePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MoneyPoolFactory extends ContractFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoneyPool {
    return new Contract(address, _abi, signerOrProvider) as MoneyPool;
  }
}
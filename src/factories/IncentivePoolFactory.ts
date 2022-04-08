import {
  Signer,
  Contract,
  ContractFactory,
} from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IncentivePool } from "../types/IncentivePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMoneyPool",
        name: "moneyPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "incentiveAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountPerSecond_",
        type: "uint256",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userIncentiveIndex",
        type: "uint256",
      },
    ],
    name: "ClaimIncentive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newEndTimestamp",
        type: "uint256",
      },
    ],
    name: "IncentiveEndTimestampUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "IncentivePoolEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAmountPerSecond",
        type: "uint256",
      },
    ],
    name: "RewardPerSecondUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accruedIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "incentiveIndex",
        type: "uint256",
      },
    ],
    name: "UpdateIncentivePool",
    type: "event",
  },
  {
    inputs: [],
    name: "amountPerSecond",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "beforeTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTimestamp",
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
    inputs: [],
    name: "getIncentiveIndex",
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
    inputs: [],
    name: "getIncentivePoolData",
    outputs: [
      {
        internalType: "uint256",
        name: "incentiveIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getUserIncentive",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getUserIncentiveData",
    outputs: [
      {
        internalType: "uint256",
        name: "userIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userLTokenBalance",
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
        name: "lToken_",
        type: "address",
      },
    ],
    name: "initializeIncentivePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newAmountPerSecond",
        type: "uint256",
      },
    ],
    name: "setAmountPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newEndTimestamp",
        type: "uint256",
      },
    ],
    name: "setEndTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "updateIncentivePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawResidue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IncentivePoolFactory extends ContractFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncentivePool {
    return new Contract(address, _abi, signerOrProvider) as IncentivePool;
  }
}

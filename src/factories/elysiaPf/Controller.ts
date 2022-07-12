import { Provider } from "@ethersproject/providers";
import { Contract, ContractFactory, Signer } from "ethers";
import { IController } from "../../types/elysiaPf/IController";

export class ElysiaPfControllerFactory extends ContractFactory {
  static connect(address: string, signerOrProvider: Signer | Provider) {
    return new Contract(address, _abi, signerOrProvider) as IController;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract NftBond",
        name: "nft_",
        type: "address",
      },
      {
        internalType: "address",
        name: "router_",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdc_",
        type: "address",
      },
      {
        internalType: "address",
        name: "weth_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Borrow_DepositNotEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "Deposit_Ended",
    type: "error",
  },
  {
    inputs: [],
    name: "Deposit_ExceededTotalAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "Deposit_NotDivisibleByDecimals",
    type: "error",
  },
  {
    inputs: [],
    name: "Deposit_NotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "InitProject_InvalidTargetAmountInput",
    type: "error",
  },
  {
    inputs: [],
    name: "InitProject_InvalidTimestampInput",
    type: "error",
  },
  {
    inputs: [],
    name: "NotExistingProject",
    type: "error",
  },
  {
    inputs: [],
    name: "NotExistingToken",
    type: "error",
  },
  {
    inputs: [],
    name: "Repay_AlreadyDepositted",
    type: "error",
  },
  {
    inputs: [],
    name: "Repay_DepositNotEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "Repay_NotEnoughAmountInput",
    type: "error",
  },
  {
    inputs: [],
    name: "Withdraw_NotRepayedProject",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Controller_NewProject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "USDC",
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
    inputs: [],
    name: "WETH9",
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
        name: "projectId",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimal",
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
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositStartTs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositEndTs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unit",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "initProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract NftBond",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "projects",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositStartTs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositEndTs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finalAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "repayed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
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
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "swapExactOutputSingle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
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
    inputs: [],
    name: "weth",
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
        name: "projectId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

import { Signer, Contract, ContractFactory } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DataPipeline } from "../types/DataPipeline";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "moneyPool_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "getAssetBondStateData",
    outputs: [
      {
        components: [
          {
            internalType: "enum DataStruct.AssetBondState",
            name: "assetBondState",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "tokenOwner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "debtOnMoneyPool",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeOnCollateralServiceProvider",
            type: "uint256",
          },
        ],
        internalType: "struct DataPipeline.AssetBondStateDataLocalVars",
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
    ],
    name: "getReserveData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalLTokenSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "implicitLTokenSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lTokenInterestIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalDTokenSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalDTokenSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageRealAssetBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dTokenLastUpdateTimestamp",
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
            name: "moneyPooLastUpdateTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct DataPipeline.ReserveDataLocalVars",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "underlyingAssetBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lTokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "implicitLtokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dTokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalDTokenBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageRealAssetBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct DataPipeline.UserDataLocalVars",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moneyPool",
    outputs: [
      {
        internalType: "contract IMoneyPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class DataPipeline__factory extends ContractFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataPipeline {
    return new Contract(address, _abi, signerOrProvider) as DataPipeline;
  }
}

import { Signer, Contract, ContractFactory } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AssetBond } from "../AssetBond";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum DataStruct.AssetBondState",
            name: "state",
            type: "DataStruct.AssetBondState",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralServiceProvider",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "principal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "couponRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "delinquencyRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "loanStartTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralizeTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturityTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationTimestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            internalType: "string",
            name: "signerOpinionHash",
            type: "string",
          },
        ],
        internalType: "struct DataStruct.AssetBondData",
        name: "assetBondData",
        type: "tuple",
      },
    ],
    name: "getAssetBondDebtData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "parseAssetBondId",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "countryCode",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralServiceProviderIdentificationNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralLatitude",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralLatitudeSign",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralLongitude",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralLongitudeSign",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralDetail",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralCategory",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "productNumber",
            type: "uint256",
          },
        ],
        internalType: "struct DataStruct.AssetBondIdData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class AssetBondFactory extends ContractFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetBond {
    return new Contract(address, _abi, signerOrProvider) as AssetBond;
  }
}
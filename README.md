# elyfi-v1-sdk
The latest version of the SDK is used in production in the Elyfi web interface


## Quick Start

## Example
### StkaingPool
```
import ethers from 'ethers'
import { StakingPoolFactory } from '@elysia-dev/elyfi-v1-sdk';

// get eth signer from broswer
const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()

// connect(address, signer or provider)
const stakingPool = StakingPoolFactory
	.connect(
		'0xCD668B44C7Cf3B63722D5cE5F655De68dD8f2750',
		signer
	)

stakingPool
	.stake(ethers.utils.parseEther('10'))
	.then((tx) => {
		console.log(tx)
	})

stakingPool
	.stake(ethers.utils.parseEther('10'))
	.then((tx) => {
		console.log(tx)
	})
```

### MoneyPool
```
import ethers from 'ethers'
import { MoneyPoolFactory } from '@elysia-dev/elyfi-v1-sdk';

// get ether signer from broswer
const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()

// BSC moneypool
// 0x0bdFef5f8B75741d33a22d85022244CBE793DA24 is BSC moneypool contract address
const moneyPool = MoneyPoolFactory
	.connect(
		'0x0bdFef5f8B75741d33a22d85022244CBE793DA24',
		signer
	)

// Depost 10 BUSD from signer
// "0xe9e7cea3dedca5984780bafc599bd69add087d56" is BUSD token address
const depositTx = moneyPool
	.deposit(
		"0xe9e7cea3dedca5984780bafc599bd69add087d56",
		signer.address,
		ethers.utils.BigNumber.from("10")
	)
// See https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse
await depositTx.wait();

// Withdraw 10 BUSD
// "0xe9e7cea3dedca5984780bafc599bd69add087d56" is BUSD token address
const withdrawTx = moneyPool
	.withdraw(
		"0xe9e7cea3dedca5984780bafc599bd69add087d56",
		signer.address,
		ethers.utils.BigNumber.from("10")
	)
await withdrawTx.wait()
```

## Supported Contract
* Moneypool
* DataPipeline
* IncentivePool
* StakingPool
* StakingPoolV2 (no round)
* Tokeninzer
* AssetBond
* ERC20

Here's a link for contract addresses

https://github.com/elysia-dev/elyfi-web/blob/main/src/core/envs/prod.json

## Contribution
If you have questions about how to use the SDK, please reach out in our Discord. Pull requests welcome!

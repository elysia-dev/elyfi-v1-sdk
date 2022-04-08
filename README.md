# elyfi-v1-sdk
The latest version of the SDK is used in production in the Elyfi web interface


## Quick Start

```
yarn add elyfi-v1-sdk
```

## Example
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
```

## Supported Contract
* Moneypool
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


#NFTX contract 

- yarn
- npx hardhat compile
- npx hardhat test
- deploy
npx hardhat run {scripts/deploy.js} --network {rinkeby}
- verify
npx hardhat verify {contract} '{ipfs}' --network {rinkeby}  



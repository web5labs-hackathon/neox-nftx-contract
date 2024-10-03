
#NFTX contract 

- yarn
- npx hardhat compile
- npx hardhat test
- deploy
npx hardhat run scripts/deploy.js --network  NEOX
- verify
npx hardhat verify  0x9E33178D51487609D2d0127C3DdD4985888FC915   QmVzHjmBxSb83XQ5vaMrLiAi55rnujZhYAGcvNxAVa4c1P  --network  NEOX 

- testnet
https://xdocs.ngd.network/development/development-environment-information#testnet

# error 
## ProviderError: transaction underpriced: policy minGasTipCap needed 20000000000, baseFee needed 20000000000, gasTipCap 25000000000, gasFeeCap 25000000000 
refer : https://stackoverflow.com/questions/71343598/providererror-transaction-underpriced-on-mumbai-testnet



# blockscout verify 
https://docs.blockscout.com/devs/verification/hardhat-verification-plugin
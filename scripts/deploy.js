// We require the Hardhat Runtime Environment explicitly here. This is optional
const hre = require('hardhat');

async function main() {

  // We get the contract to deploy
  const NFTX = await hre.ethers.getContractFactory('NFTX');
  const nftx = await NFTX.deploy('ipfs://QmVzHjmBxSb83XQ5vaMrLiAi55rnujZhYAGcvNxAVa4c1P/');
  await nftx.deployed();
  console.log('Deployed to:', nftx.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

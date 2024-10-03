require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-gas-reporter');

require("@nomicfoundation/hardhat-verify");


const dotenv = require('dotenv');

dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    NEOX: {
      url: 'https://neoxt4seed1.ngd.network', // 输入您的RPC URL
      chainId: 12227332, // (hex: 0x504),
      accounts: [PRIVATE_KEY],
      gasPrice: 45000000000,
      saveDeployments: true,
    },
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      'optimism-sepolia': "abc"
    },
    customChains: [
      {
        network: "NEOX",
        chainId: 12227332,
        urls: {
          apiURL: "https://neoxt4seed1.ngd.network",
          browserURL: "https://xt4scan.ngd.network/",
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  }

};

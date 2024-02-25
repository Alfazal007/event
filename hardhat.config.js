require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  namedAccounts: {
    deployer: {
      default: 0
    },
    player: {
      default: 1
    }
  },
  networks: {
    hardhat: {
      chainId: 313337,
      blockConfirmations: 1
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      sepolia: process.env.ETHERSCANAPIKEY
    }, customChains: [
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io",
        },
      },
    ],
  },
};

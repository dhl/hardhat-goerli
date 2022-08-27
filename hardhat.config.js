require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const {
  GOERLI_ALCHEMY_API_KEY,
  GOERLI_PRIVATE_KEY
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

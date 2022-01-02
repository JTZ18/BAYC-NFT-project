/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');
require('@openzeppelin/hardhat-upgrades');

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY // process.env.ETHERSCAN_API_KEY // `${ETHERSCAN_API_KEY}`
  },
  abiExporter: {
    path: './data/abi',
    runOnCompile: true,
    clear: false,
    flat: false,
    only: [],
    spacing: 2,
    pretty: false,
  }
};
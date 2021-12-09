require("dotenv").config();
const mnemonic = process.env.mnemonic;
const url = process.env.url;

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      accounts: [mnemonic],
      url: url,
    },
  },
};

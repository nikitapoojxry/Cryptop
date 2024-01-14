// https://eth-sepolia.g.alchemy.com/v2/A5RVZhPNuorfbHzJWgwxOqDSwrTJq6W_
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/A5RVZhPNuorfbHzJWgwxOqDSwrTJq6W_',
      accounts: ['4e9cd6912a1892af65dce1789a4733de58554f60e4e4496a97e050a7d6ac3c00'],
    },
  },
};
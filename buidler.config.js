usePlugin("@nomiclabs/buidler-waffle");

module.exports = {
  solc: {
    version: "0.6.6"
  },
  networks: {
    buidlerevm: {
      gas: 9000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true
    }
  }
};

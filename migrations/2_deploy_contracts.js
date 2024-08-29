const MetaverseNFT = artifacts.require("MetaverseNFT");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(MetaverseNFT, { from: accounts[0], gas: 5000000 });
};
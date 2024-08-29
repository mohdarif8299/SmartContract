const hre = require("hardhat");

async function main() {
  // Get the signer (deployer) information
  const [deployer] = await hre.ethers.getSigners();

  // Log the account address
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the private key of the deployer (handle this securely!)
  const privateKey = deployer.privateKey;
  console.log("Deployer's private key:", privateKey); // BE CAREFUL with this!

  // Deploy the contract
  const MetaverseNFT = await hre.ethers.getContractFactory("contracts/MetaverseNFT.sol:MetaverseNFT");
  const metaverseNFT = await MetaverseNFT.deploy();

  // Wait for the contract to be deployed
  await metaverseNFT.waitForDeployment();

  // Get and log the contract address
  const contractAddress = await metaverseNFT.getAddress();
  console.log("MetaverseNFT deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const utils = hre.ethers.utils

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = utils.parseEther("0.000001");

  const Lock = await hre.ethers.getContractFactory("Lock");

  console.log(`Deploying contract. chain=${hre.network.name}`)

  // See https://docs.ethers.io/v5/api/contract/contract-factory/#ContractFactory--creating
  const lock = await Lock.deploy(
    // Contract arguments go here
    unlockTime, 
    // OPTIONAL. Deploy tx options go here. 
    { value: lockedAmount }
  );
  const deployTx = lock.deployTransaction

  console.log(`Contract deployed. Pending confirmation. chainId=${deployTx.chainId} txID=${deployTx.hash} address=${lock.address}`)
  await deployTx.wait();
    

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

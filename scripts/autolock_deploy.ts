import { ethers } from "hardhat";
import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";

const autoFarm = require("../abis/autofarm.js");

async function main() {

  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);

  const AutoLock = await ethers.getContractFactory("TimelockController");
  const autoLock = await AutoLock.deploy("0x7368ea4b5A7204CFe592d096D4CdC8832f754027", 0, 0);

  await autoLock.deployed();

  console.log("AutoLock deployed to:", autoLock.address);

  const autoFarmContract = (await ethers.getContractAt(autoFarm.abi, autoFarm.address)) as AutoFarmV2;

  let owner = await autoFarmContract.owner();
  console.log("owner", owner);
  const tx = await autoFarmContract.transferOwnership(autoLock.address);
  await tx.wait();
  owner = await autoFarmContract.owner();
  console.log("New owner", owner);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

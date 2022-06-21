import { ethers } from "hardhat";
import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";

const autolock = require("../abis/autolock.js");

async function main() {

  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);

  // const AutoLock = await ethers.getContractFactory("TimelockController");
  // const autoLock = await AutoLock.deploy("0x7368ea4b5A7204CFe592d096D4CdC8832f754027", 0, 0);

  // await autoLock.deployed();

  // console.log("AutoLock deployed to:", autoLock.address);

  const AutoFarm = (await ethers.getContractAt(autolock.abi, autolock.address)) as AutoFarmV2;

  let owner = await AutoFarm.owner();
  console.log("owner", owner);
  // await AutoFarm.transferOwnership(autoLock.address);
  // owner = await AutoFarm.owner();
  // console.log("New owner", owner);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

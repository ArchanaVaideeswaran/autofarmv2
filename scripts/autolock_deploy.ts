import { ethers } from "hardhat";
import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";

const autofarm = require("../abis/autofarm.js");

async function main() {

  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);

//   const AutoLock = await ethers.getContractFactory("TimelockController");
//   const autoLock = await AutoLock.deploy("0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D", 0, 0);

//   await autoLock.deployed();

//   console.log("AutoLock deployed to:", autoLock.address);

  const AutoFarm = (await ethers.getContractAt(autofarm.abi, autofarm.address)) as AutoFarmV2;

  let owner = await AutoFarm.owner();
  console.log("owner", owner);
//   await AutoFarm.transferOwnership(autoLock.address);
//   owner = await AutoFarm.owner();
//   console.log("New owner", owner);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

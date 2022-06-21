import { ethers } from "hardhat";

async function main() {
  const Auto = await ethers.getContractFactory("AUTOv2");
  const auto = await Auto.deploy();

  await auto.deployed();

  console.log("AUTO token deployed to:", auto.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

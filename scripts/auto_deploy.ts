import { ethers } from "hardhat";
import { AUTOv2 } from "../src/types/AUTOv2";

async function main() {
  const Auto = await ethers.getContractFactory("AUTOv2");
  const auto = await Auto.deploy() as AUTOv2;
  const [signer] = await ethers.getSigners();
  await auto.deployed();

  console.log("AUTO token deployed to:", auto.address);
  const amt1 = ethers.utils.parseEther("10000");
  await auto.mint(signer.address,amt1 );
  await auto.mint( "0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D", amt1);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
import { ucs2 } from "punycode";
import { AUTOv2 } from "../src/types/AUTOv2";

const autotoken = require("../abis/auto.js");

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);
  const strat = await ethers.getContractFactory("StratX2_PCS");
  
  const corn = "0x1cc23571ec9dc62b8f80bf5c5e13ea035ce0c49b";
  const wcube = "0xb9164670a2f388d835b868b3d0d441fa1be5bb00";
  const tenfi = "0xa3DD6beDb8A7CA5d459Ccc488b7Fd0dD3Fe80F6C";
  const usdt = "0x9bd522cc85bd1bd6d069d5e273e46ccfee905493";
  const addresses = [wcube, 
  "0x35bfEf07bbd0eccb33137a4F6701c77E210bdd26", // govAddress
  "0x0e3DA980c870F2436396D97231f47E7a92160029", // autoFarm or TENFIFarm
  tenfi, 
  "0x93247d3a88c7474bca9563ed40c5f31800bc623a", // want address 
  usdt, 
  wcube, 
  corn, 
  "0x6273638e3be5770851e23bfce27d69592bedcd2c", // Masterchef (farm) address
  "0x14C02Dc9B29aC28e852F740CBA6722BC7308fEB8", // router address
  "0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D", // reward address
  "0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D"] // burn address

  const earnedToAutoPath = [corn, wcube, tenfi]

  const earnedToToken0Path = [corn, wcube, usdt]

  const earnedToToken1Path = [corn, wcube];

  const token0ToEarnedPath = [usdt, wcube, corn]

  const token1ToEarnedPath = [wcube, corn]

  const StratPCS = await strat.deploy(addresses, 5, false, false, false, earnedToAutoPath, earnedToToken0Path, earnedToToken1Path, token0ToEarnedPath, token1ToEarnedPath, 0, 0 ,0, 0);

  await StratPCS.deployed();

  console.log("StratX2 PCS deployed to:", StratPCS.address);

//   address: { "0": "0x93247d3a88C7474BCA9563eD40C5F31800bc623a", "1": "0", "2": "7405200", "3": "0", "4": "0x7cdCd748d59bb1f55E0bBdaa7a6BbDd9d981af3D", "want": "0x93247d3a88C7474BCA9563eD40C5F31800bc623a", "allocPoint": "0", "lastRewardBlock": "7405200", "accTENFIPerShare": "0", "strat": "0x7cdCd748d59bb1f55E0bBdaa7a6BbDd9d981af3D" }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

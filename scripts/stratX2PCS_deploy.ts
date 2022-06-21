import { ethers } from "hardhat";
const autotoken = require("../abis/auto.js");

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);
  const strat = await ethers.getContractFactory("StratX2_PCS");
  const dai ="0xdf443238d7b80446c3b3e76a556a354670da0205";
  const corn = "0x1cc23571ec9dc62b8f80bf5c5e13ea035ce0c49b";
  const wcube = "0xb9164670a2f388d835b868b3d0d441fa1be5bb00";
  const autoToken = "0xD9b4940B748d8C892D3112f78f15EA37f5712159";
  const usdc = "0x397f46e835cbee65228c9af441c48eea50a4ca37";
  const usdt = "0x9bd522cc85bd1bd6d069d5e273e46ccfee905493";
  const govAddress = "0x28493E97F18b1b4Bb0b95507a876ED458AF27494"
  const autoTokenFarm = "0x84600C18ca1B7EC74a5369F593e30d4F22B007ee"
  const wantAddress = "0x3d7df35d06e1746900be3725d201523189ae4ce1"; // usdt-DAI LP token in Capricorn Swap
  const masterChefFarmAdd = "0x6273638e3be5770851e23bfce27d69592bedcd2c"
  const routerAdd = "0x14C02Dc9B29aC28e852F740CBA6722BC7308fEB8"
  const rewardAdd = "0x7368ea4b5A7204CFe592d096D4CdC8832f754027"
  const burnAdd = "0x7368ea4b5A7204CFe592d096D4CdC8832f754027"
  const addresses = [wcube, 
  govAddress, // govAddress
  autoTokenFarm, // autoFarm or autoTokenFarm
  autoToken, 
  wantAddress, // want address 
  usdt, //token 0
  wcube, //token 1
  corn, //earnedAddress
  masterChefFarmAdd, // Masterchef (farm) address
  routerAdd, // router address
  rewardAdd, // reward address
  burnAdd] // burn address

  const earnedToAutoPath = [corn, wcube, autoToken]

  const earnedToToken0Path = [corn, wcube, usdt]

  const earnedToToken1Path = [corn, wcube, dai];

  const token0ToEarnedPath = [usdt, wcube, corn]

  const token1ToEarnedPath = [dai, wcube, corn]

  const StratPCS = await strat.deploy(addresses, 5, false, false, false, earnedToAutoPath, earnedToToken0Path, earnedToToken1Path, token0ToEarnedPath, token1ToEarnedPath, 0, 0 ,0, 0);

  await StratPCS.deployed();

  console.log("StratX2 PCS deployed to:", StratPCS.address);

//   address: { "0": "0x93247d3a88C7474BCA9563eD40C5F31800bc623a", "1": "0", "2": "7405200", "3": "0", "4": "0x7cdCd748d59bb1f55E0bBdaa7a6BbDd9d981af3D", "want": "0x93247d3a88C7474BCA9563eD40C5F31800bc623a", "allocPoint": "0", "lastRewardBlock": "7405200", "accautoTokenPerShare": "0", "strat": "0x7cdCd748d59bb1f55E0bBdaa7a6BbDd9d981af3D" }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

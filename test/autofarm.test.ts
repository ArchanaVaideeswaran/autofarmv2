const { expect } = require("chai");
const { ethers } = require("hardhat");

import { AbiCoder } from "ethers/lib/utils";
import { TimelockController } from "../src/types/AutoFarmTimelock.sol/TimelockController";
import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";

const autoToken = require("../abis/auto.js");
const autoFarm = require("../abis/autofarm.js");
const autoLock = require("../abis/autoLock.js");
const StratX2_PCS = require("../abis/stratX2PCS.js");

async function main() {
    const [signer] = await ethers.getSigners();
    // const autoLockInstance = (await ethers.getContractAt(autoLock.abi, autoLock.address)) as TimelockController;
    // const autoFarmInstance = (await ethers.getContractAt(autoFarm.abi, autoFarm.address)) as AutoFarmV2

    const want = "0x3d7df35d06e1746900be3725d201523189ae4ce1";
    const farm = "0x84600C18ca1B7EC74a5369F593e30d4F22B007ee";
    const strat = "0x16470b213FCCbd995B848699b62903B070135d2f";

    let abiCoder = new ethers.utils.AbiCoder();

    const role = abiCoder.encode(["string"], ["EXECUTOR_ROLE"]);
    console.log(role);

    // autoLockInstance.getRoleMember(role, signer.address);

    // await autoLockInstance.add(farm, want, false, strat);

    // const pool0 = await autoFarmInstance.poolInfo(0);

    // console.log(pool0);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
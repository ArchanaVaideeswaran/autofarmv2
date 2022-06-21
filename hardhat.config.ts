import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "solidity-coverage";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
      // forking: { url: process.env.ALCHEMY_MAINNET_API || "", blockNumber: 14877894 },
    },
    testnet: {
      url: "https://http-testnet.cube.network",
      chainId: 1819,
      gasPrice: 20000000000,
      accounts: {mnemonic: process.env.RI_AV_MNEMONIC}
    }
  },
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "src/types",
  },
};

export default config;
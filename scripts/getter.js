// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, network } = require("hardhat");

async function main() {
    const contract = await ethers.getContractAt("Something", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    console.log(await contract.get());
    // const number = await something.get();
    // console.log(number);
    // const tx = await something.update();
    // const txReceipt = await tx.wait(1);
    // console.log(tx);
    // console.log("=======================================================");
    // console.log(txReceipt.events);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});

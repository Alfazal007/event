const { ethers, network } = require("hardhat");
const { verify } = require("../verify");
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    // const something = await deploy("Something", {
    //     from: deployer,
    //     args: [],
    //     log: true,
    //     waitConfirmations: network.config.blockConfirmations
    // });
    // log("DEployed");
    // log("verifying");

    // await verify(something.address, []);
    // log("verified");
    const something = await ethers.getContractAt("Something", "<deployed contract address>");
    const update = await something.update();
    const txReceipt = await update.wait(3);
    console.log(txReceipt.logs[0].args[0].toString());
    // const contract = await ethers.getContractAt("Something", something.address);
    // contract.on('some_event', async (number) => {
    //     console.log("THIS IS FROM THE EVENT ", number);
    // });
    // await getData(contract);
    // await getData(contract);
};

// async function getData(contract) {
//     console.log(await contract.get());
//     const tx = await contract.update();
//     const txReceipt = await tx.wait(1);
//     console.log(await contract.get());
// }

module.exports.tags = ["all", "something"];

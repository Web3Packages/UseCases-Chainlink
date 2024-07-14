
const hre = require("hardhat");

// 0xbc38276Aa222cf14f45449a6A55baeDf164813c7 deploy on 2024.07.07 14:15 at sepolia
async function depoly(){
  const Protocol = await hre.ethers.deployContract("FunctionsConsumer");
  await Protocol.waitForDeployment();
  console.log(`FunctionsConsumer done:  ${await Protocol.target}`);
  return  Protocol;
}

depoly()

import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Utsava");
  const contract = await Contract.deploy();
  
  await contract.deploymentTransaction()?.wait(1);
  console.log("Contract deployed from:", contract.deploymentTransaction()?.from);
  console.log(contract.target);
  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
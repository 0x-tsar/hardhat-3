import { ethers, Contract } from "ethers";
import Token from "./artifacts/contracts/Token.sol";

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.provider.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
      }
    });
  });

export default getBlockchain;

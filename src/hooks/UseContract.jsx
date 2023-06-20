import React from 'react'
import abi from "../abi.json";
import { ethers } from 'ethers';


export const contracts = ()=>{
  const contractAddress = "0xFFE09412B070bC1880D5FBD2BeD09639E367061A";
    if (window.ethereum && window.ethereum.isMetaMask) {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        // setProvider(tempProvider);
  
        const tempSigner = tempProvider.getSigner();
        // setSigner(tempSigner);
        
        const tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
      return {tempContract}
    }
    
}


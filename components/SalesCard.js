import React from 'react';
import { ThirdwebNftMedia  } from "@thirdweb-dev/react";
import { ethers } from "ethers";


const SalesCard = ({ seller, token, tokenId, amountOfToken, deadline, price, isSold }) => {
    function weiToEther(wei) {
        if (!wei) return ""; // Handle cases where wei is not provided
        const weiBigNumber = ethers.BigNumber.from(wei);
        return ethers.utils.formatEther(weiBigNumber);
    }

   const weiBigNumber = price ? ethers.BigNumber.from(price) : ethers.BigNumber.from(0);
const priceInEther = weiToEther(weiBigNumber);
  return (
    <div className="cards">
      <div className="card-header">
        {/* <h3>Sales Information</h3> */}
      </div>
      <div className="card-body">
      <video autoPlay loop muted>
        <source src="https://c63fd3dcf8c9eec46c253e543b0ff569.ipfscdn.io/ipfs/bafybeia46ytmt7zkbqiupsrqjhhnynpws3sf2uhiihbs6csnq45ojhma24/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <br />
        {/* <p><strong>Seller:</strong> {seller}</p> */}
        {/* <p><strong>Token:</strong> {token}</p> */}
        <p><strong>Token ID:</strong> {tokenId}</p>
        <p><strong>Amount of Token:</strong> {amountOfToken}</p>
        {/* <p><strong>Deadline:</strong> {deadline}</p> */}
        <p><strong>Price:</strong> {priceInEther}</p>
        {/* <p><strong>Is Sold:</strong> {isSold ? 'Yes' : 'No'}</p> */}
      </div>
    </div>
  );
};

export default SalesCard;
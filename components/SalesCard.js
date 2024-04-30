import React from 'react';

const SalesCard = ({ seller, token, tokenId, amountOfToken, deadline, price, isSold }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Sales Information</h3>
      </div>
      <div className="card-body">
        <p><strong>Seller:</strong> {seller}</p>
        <p><strong>Token:</strong> {token}</p>
        <p><strong>Token ID:</strong> {tokenId}</p>
        <p><strong>Amount of Token:</strong> {amountOfToken}</p>
        <p><strong>Deadline:</strong> {deadline}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Is Sold:</strong> {isSold ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default SalesCard;
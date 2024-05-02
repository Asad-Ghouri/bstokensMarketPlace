import React from 'react';
import { useState } from 'react';
import Footer2 from "../components/Footer2.tsx"
import { Box, Divider } from '@chakra-ui/react'

import { useAddress, useContract } from "@thirdweb-dev/react";
import { useToast } from '@chakra-ui/react'
import { NFT_COLLECTION_ADDRESS } from '../const/addresses.ts';


function MintPage() {
  const [value, setValue] = useState<number | ''>('');

  const address = useAddress();
  const toast = useToast()
  const [Loading, setLoading] = useState<any>();


  const { contract } = useContract(NFT_COLLECTION_ADDRESS);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value ? parseInt(event.target.value) : '');
  };

  console.log("quantity is ",value)

  const Mint = async () => {
    try {
      
        if(!address){
            toast({
                // position: 'bottom-center',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Connect your wallet First
                  </Box>
                ),
              })
              return;
        }
        // Handle form submission here
        setLoading(true)
      const tx = await contract?.erc1155.claimTo(address, 0, value);
      console.log('Transaction:', tx);
      toast({
        // position: 'bottom-center',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
           Successfully Done
          </Box>
        ),
      })
      setLoading(false)

    } catch (error) {
      console.error('Error:', error);
      setLoading(false)

      toast({
        // position: 'bottom-center',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
          Insufficient Funds
          </Box>
        ),
      })
      // Handle error gracefully, e.g., show an error message to the user
    }
  };
  

  return (
    <>
    <div className="m-container">
      <div className="m-center">
      <video autoPlay loop muted className='mint-vedio'>
        <source src="https://c63fd3dcf8c9eec46c253e543b0ff569.ipfscdn.io/ipfs/bafybeia46ytmt7zkbqiupsrqjhhnynpws3sf2uhiihbs6csnq45ojhma24/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h1 className="m-title">Blue Sapphire Bracelet</h1>
        <p className="m-description">Bstoken NFT is connect to physical bracelet having a strong bond which makes it unique and high in utility.</p>
        <div className="m-form">
          <input
            type="number"
            value={value}
            onChange={handleChange}
            placeholder="1"
            className="m-input"
          />
          <button  onClick={Mint} className="m-button">{Loading?"Loading...":"Mint (1000.0 BSTC)"}</button>
        </div>
    </div>
      </div>
      <br />
      <br />
        <Divider />
      <Footer2 />
    </>
  );
}

export default MintPage;

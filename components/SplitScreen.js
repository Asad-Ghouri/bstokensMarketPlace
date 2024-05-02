'use client'

import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link';

import Image from 'next/image';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


import {
  Link
  } from '@chakra-ui/react'

export default function SplitScreen() {
  const address = useAddress();

  return (
    <>
    {/* <div className="splitpage">
      <div className="splitContainer">
        
        <div className="video-container">
      
      <img src="https://itishstudios.net/assert/bs.gif" alt="" />
    </div>
        <div className="ttext">
           <h1 className="BST">
           Blue Sapphire Trading
           </h1>
           <h3>
            This groundbreaking innovation is founded on original bracelet adorned with exquisite gematones a resilient titanium body , resulting in a perfect blend, particularly suited for the metaverce
           </h3>
           <Flex dir={"row"} alignItems={"center"} className='cbtn'>
                    <Stack display={{ base: 'none',md:"block" }}>  </Stack> 
                     {address && (
                         <Link as={NextLink} href={`/profile/${address}`}>
                           <button className='custom-button'>My NFTs</button>
                         </Link>
                     )}
             </Flex>
        </div>
      </div>
    </div> */}
    <img src="https://itishstudios.net/assert/marketplaceop.png" className='bannerImage' alt="" />
    </>
  )
}
   
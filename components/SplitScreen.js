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
// import Nft from "../public/banner1.png"
// import image2 from "../public/banner/2.png"
// import image3 from "../public/banner/3.png"
// import image4 from "../public/banner/4.png"
// import image5 from "../public/banner/5.png"
// import image6 from "../public/banner/6.png"
// import image7 from "../public/banner/7.png"

export default function SplitScreen() {
  const address = useAddress();

  return (
    <>
    <div className="splitpage">
      <div className="splitContainer">
        {/* <div className="dflex">
          <div className="scontent animated-text">
             <h1 className="sheading">
                Bstoken Braclet Composition
              </h1>
              <div className="imflex">
                
              <div className="img neoimg">
              <img src="https://itishstudios.net/assert/public/3.png" alt="" />    
                </div>

                <div className="cont">
                Neodymium
                </div>
                
              </div>

              <div className="imflex">
              <div className="img">
              <img src="https://itishstudios.net/assert/public/4.png" alt="" />    
      
                </div>
                <div className="cont">
                Blue Sapphire
                </div>
               
              </div>

              <div className="imflex ">
              <div className="img">
                <img src="https://itishstudios.net/assert/public/5.png" alt="" />    

                </div>
                <div className="cont tit">
                Titanium
                </div>
                
              </div>

              <div className="imflex">
                
              <div className="img">
                <img src="https://itishstudios.net/assert/public/6.png" alt="" />    

                  
                </div>

                <div className="cont">
                Far Infrared
                </div>
                
              </div>

              <div className="imflex">
               
              <div className="img gerimg">
                <img src="https://itishstudios.net/assert/public/7.png" alt="" />    

                </div>

                <div className="cont germa">
                Germanium
                </div>
               
              </div>
              
          </div>
          <div className="image">
          <img src="https://itishstudios.net/assert/public/2.png" alt="" />    

          </div>
        </div> */}
        <div className="video-container">
      {/* <video width="100%" controls loop>
        <source src="https://itishstudios.net/assert/bs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src="https://itishstudios.net/assert/bs.gif" alt="" />
    </div>
        <div className="ttext">
           <h1 className="BST">
            BSToken NFT
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
    </div>
    
    </>
  )
}
   
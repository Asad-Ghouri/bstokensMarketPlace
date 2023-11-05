'use client'

import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import Image from 'next/image';


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
  return (
    <>
    <div className="splitpage">
      <div className="splitContainer">
        <div className="dflex">
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
        </div>
        <div className="ttext">
           <h1 className="BST">
            BSToken NFT
           </h1>
           <h3>
            This groundbreaking innovation is founded on original bracelet adorned with exquisite gematones a resilient titanium body , resulting in a perfect blend, particularly suited for the metaverce
           </h3>
        </div>
      </div>
    </div>
    </>
  )
}
    // <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    //   <Flex p={8} flex={1} align={'center'} justify={'center'}>
    //     <Stack spacing={6} w={'full'} maxW={'lg'} className='animated-text'>
    //       <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} className='bs'>
    //         <Text
    //           as={'span'}
    //           position={'relative'}
    //           _after={{
    //             content: "''",
    //             width: 'full',
    //             height: useBreakpointValue({ base: '20%', md: '30%' }),
    //             position: 'absolute',
    //             bottom: 1,
    //             left: 0,
    //             bg: 'blue.400',
    //             zIndex: -1,
    //           }}>
           
    //        Bstoken NFT
    //         </Text>
    //         <br />{' '}
    //         {/* <Text color={'blue.400'} as={'span'}>
    //          and Sell NFTS
    //         </Text>{' '} */}
    //       </Heading>
    //       <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.500'}>
    //       Bst Project is based on Bracelet having stones Neodymium,
    //       Blue Sapphire, Titanium, Far Infrared, and Germanium which 
    //       helps in keeping the radiations away
    //       </Text>
    //       <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
    //         <Button
    //           rounded={''}
    //           bg={''}
    //           className='bn'
    //           color={'white'}
    //           _hover={{
    //             bg: 'blue.500',
    //           }}>
    //       <Link href='./#dnft'>  Buy Now </Link>
    //         </Button>
    //         {/* <Button rounded={'full'}>How It Works</Button> */}
    //       </Stack>
    //     </Stack>
    //   </Flex>
    //   <Flex flex={1} className='hero'>
    //     <Image
    //       alt={'Login Image'}
    //       className='spashimg animated-image'
    //       src={Nft}
    //     />
    //   </Flex>
    // </Stack>
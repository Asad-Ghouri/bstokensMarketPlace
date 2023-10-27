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
import Nft from "../public/banner1.png"

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} className='animated-text'>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} className='bs'>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
           
           Bstoken NFT
            </Text>
            <br />{' '}
            {/* <Text color={'blue.400'} as={'span'}>
             and Sell NFTS
            </Text>{' '} */}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.500'}>
          Bst Project is based on Bracelet having stones Neodymium,
          Blue Sapphire, Titanium, Far Infrared, and Germanium which 
          helps in keeping the radiations away
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={''}
              bg={''}
              className='bn'
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
          <Link href='./#dnft'>  Buy Now </Link>
            </Button>
            {/* <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} className='hero'>
        <Image
          alt={'Login Image'}
          className='spashimg animated-image'
          src={Nft}
        />
      </Flex>
    </Stack>
  )
}
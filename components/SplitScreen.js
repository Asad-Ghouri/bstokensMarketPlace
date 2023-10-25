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


import Nft from "../public/nft.jpeg";

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
              Discover Find
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
             and Sell NFTS
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Every Digital artwork on upside is authentic and truely unique.
            Blockchain technology makes this new approach to digital ownership 
            possible.
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Explore
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack> */}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
        //   objectFit={'cover'}
          className='spashimg'
          src={Nft}
        />
      </Flex>
    </Stack>
  )
}

'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';

interface Props {
  children: React.ReactNode
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export  function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const address = useAddress();
  return (
    <>
      <Box  m={"auto"} py={"10px"} px={"40px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Stack display={{ base: 'none',md:"block" }}> <img src="https://sheikhstudios.live/bs_tokens/wp-content/uploads/2023/10/logo-1-1.png" className='logoimg' alt="" /> </Stack>
            </Box>
            <HStack as={'nav'} spacing={4}  className={address?"myclass":"aas"} display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <a href="https://sheikhstudios.live/bs_tokens/">Home</a>
              <Link as={NextLink} href='/buy' mx={2.5}>
                         <Text>Buy</Text>
                     </Link>
                     <Link as={NextLink} href='/sell' mx={2.5}>
                         <Text>Sell</Text>
                    </Link>
                    <Link as={NextLink} href='/stake' mx={2.5}>
                         <Text>Stake</Text>
                    </Link>
                    <Link as={NextLink} href='/wallet' mx={2.5}>
                         <Text>Wallet</Text>
                    </Link>
            </HStack>
          </HStack>
          <Flex dir={"row"} alignItems={"center"} className='cbtn'>
                    <Stack display={{ base: 'none',md:"block" }}> <ConnectWallet /> </Stack> 
                     {address && (
                         <Link as={NextLink} href={`/profile/${address}`}>
                             <Avatar src='https://bit.ly/broken-link' ml={"20px"}/>
                         </Link>
                     )}
                 </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
               <a href="https://sheikhstudios.live/bs_tokens/">Home</a>
              <Link as={NextLink} href='/buy' mx={2.5}>
                         <Text>Buy</Text>
                     </Link>
                     <Link as={NextLink} href='/sell' mx={2.5}>
                         <Text>Sell</Text>
                    </Link>
                    <Link as={NextLink} href='/stake' mx={2.5}>
                         <Text>Stake</Text>
                    </Link>
                    <Link as={NextLink} href='/wallet' mx={2.5}>
                         <Text>Wallet</Text>
                    </Link>
                    <ConnectWallet />
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </>
  )
}
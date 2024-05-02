"use client";

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
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import React from "react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useAddress();

  return (
    <>
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        className="main-nav"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Stack display={{ base: "none", md: "block" }} className="abvImg">
                {" "}
                <img
                  src="https://riposoconcept.com/wp-content/uploads/2024/04/BST-Trading-logo-01.png"
                  className="logoimg"
                  alt=""
                />{" "}
              </Stack>
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link as={NextLink} href="/" mx={2.5}>
                <Text>Home</Text>
              </Link>
              <Link as={NextLink} href="/buy" mx={2.5}>
                <Text>Buy</Text>
              </Link>
              <Link as={NextLink} href="/sell" mx={2.5}>
                <Text>Sell</Text>
              </Link>
              <Link as={NextLink} href="/stake" mx={2.5}>
                <Text>Stake</Text>
              </Link>
              <Link as={NextLink} href="/mint" mx={2.5}>
                <Text>Mint</Text>
              </Link>
              <Link as={NextLink} href="/wallet" mx={2.5}>
                <Text>Wallet</Text>
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            
            <ConnectWallet className="cwallet" />

            <Menu>
              {address && (
                <Link as={NextLink} href={`/profile/${address}`}>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://bit.ly/broken-link"
                    }
                  />
                </Link>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link as={NextLink} href="/" mx={2.5}>
                <Text>Home</Text>
              </Link>
              <Link as={NextLink} href="/buy" mx={2.5}>
                <Text>Buy</Text>
              </Link>
              <Link as={NextLink} href="/sell" mx={2.5}>
                <Text>Sell</Text>
              </Link>
              <Link as={NextLink} href="/stake" mx={2.5}>
                <Text>Stake</Text>
              </Link>
              <Link as={NextLink} href="/wallet" mx={2.5}>
                <Text>Wallet</Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

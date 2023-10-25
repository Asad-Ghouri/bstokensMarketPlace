import React from "react";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";


import Footer from "../components/Footer"
import BFooter from "../components/BFooter"

import SplitScreen from "../components/SplitScreen"

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Container maxW={"1200px"} p={5}>
           
           
            <SplitScreen />
            <Heading mt={24}>Trending NFTs</Heading>
            <div className="flex">
                <img src="https://bafybeig5jsanehtmsllblx6c4hptov7llnx4kqauky5qw4lmgcv7ueoz7y.ipfs.cf-ipfs.com/5.png" alt="" />
                <img src="https://bafybeig5jsanehtmsllblx6c4hptov7llnx4kqauky5qw4lmgcv7ueoz7y.ipfs.cf-ipfs.com/8.png" alt="" />
                <img src="https://bafybeig5jsanehtmsllblx6c4hptov7llnx4kqauky5qw4lmgcv7ueoz7y.ipfs.cf-ipfs.com/17.png" alt="" />
                <img src="https://bafybeig5jsanehtmsllblx6c4hptov7llnx4kqauky5qw4lmgcv7ueoz7y.ipfs.cf-ipfs.com/23.png" alt="" />
            </div>
            <Heading mt={14}>Discover NFTs</Heading>
            <Text>Browse and buy NFTs from this collection.</Text>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
           <Stack mt={20}> <Footer  /> </Stack> 
        <BFooter />
        </Container>
    )
};
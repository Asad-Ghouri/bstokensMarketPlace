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
                <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.25558b8c.jpeg&w=1080&q=75" alt="" />
                <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.25558b8c.jpeg&w=1080&q=75" alt="" />
                <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.25558b8c.jpeg&w=1080&q=75" alt="" />
                <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft.25558b8c.jpeg&w=1080&q=75" alt="" />
            </div>
            <Heading mt={14}>Discover NFTs</Heading>
            <Text>Browse and buy NFTs from this collection.</Text>
            {/* <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            /> */}
           <Stack mt={20}> <Footer  /> </Stack> 
        <BFooter />
        </Container>
    )
};
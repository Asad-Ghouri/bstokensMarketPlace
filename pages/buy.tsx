import React from "react";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";


import Footer1 from "../components/Footer1"
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
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
            </div>
            <Heading mt={14} id="dnft">Discover NFTs</Heading>
            <Text>Browse and buy NFTs from this collection.</Text>
            <Heading mt={5}>Hold On Nft coming soon</Heading>
           
            {/* <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            /> */}
           <Stack mt={20}> <Footer1  /> </Stack> 
        <BFooter />
        </Container>
    )
};
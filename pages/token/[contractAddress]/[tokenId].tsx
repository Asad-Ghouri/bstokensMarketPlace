import { Avatar, Box, Container, Flex, Input, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useMinimumNextBid } from "@thirdweb-dev/react";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import { 
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS,
    Abi
} from "../../../const/addresses";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { BstChain } from "@thirdweb-dev/chains";


type Props = {
    nft: NFT;
    contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {
    const abi = Abi;
    const { contract: marketplace, isLoading: loadingMarketplace } = 
        useContract(
            MARKETPLACE_ADDRESS, 
            abi
        );

    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

    // const { data: directListing, isLoading: loadingDirectListing } = 
    //     useValidDirectListings(marketplace, {
    //         tokenContract: NFT_COLLECTION_ADDRESS, 
    //         tokenId: nft.metadata.id,
    //     });

    //Add these for auction section
    const [bidValue, setBidValue] = useState<string>();

   
    return (
        <Container maxW={"1200px"} p={5} my={5}>
            <SimpleGrid columns={2} spacing={6}>
                <Stack spacing={"20px"}>
                    <Box borderRadius={"6px"} overflow={"hidden"}>
                    <Skeleton isLoaded={!loadingMarketplace}>
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                width="100%"
                                height="100%"
                            />
                        </Skeleton>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} className="cw" >Description:</Text>
                        <Text>{nft.metadata.description}</Text>
                    </Box>
                  
                </Stack>
                
                <Stack spacing={"20px"}>
                    {contractMetadata && (
                        <Flex alignItems={"center"}>
                            <Box borderRadius={"4px"} overflow={"hidden"} mr={"10px"}>
                                <MediaRenderer
                                    src="https://riposoconcept.com/wp-content/uploads/2024/04/BST-Trading-logo-01.png"
                                    height="32px"
                                    width="32px"
                                />
                            </Box>
                            <Text fontWeight={"bold"}>{contractMetadata.name}</Text>
                        </Flex>
                    )}
                    <Box mx={2.5}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>{nft.metadata.name}</Text>
                        <Link
                            href={`/profile/${nft.owner}`}
                        >
                            <Flex direction={"row"} alignItems={"center"}>
                                <Avatar  src='https://bit.ly/broken-link' h={"24px"} w={"24px"} mr={"10px"}/>
                                <Text fontSize={"small"}>{nft.owner.slice(0,6)}...{nft.owner.slice(-4)}</Text>
                            </Flex>
                        </Link>
                    </Box>
                    
                    <Stack backgroundColor={"#EEE"} p={2.5} borderRadius={"6px"}>
                        <Text color={"darkgray"}>Price:</Text>
                       
                    </Stack>
                  
                </Stack>
            </SimpleGrid>
            
        </Container>
    )
};

export const getStaticProps: GetStaticProps = async (context) => {
    const tokenId = context.params?.tokenId as string;
  
    const sdk = new ThirdwebSDK(BstChain, {
        secretKey: "GJSZNQ2zV60Sk9zQdtCleuFW8OMMubv3JJU5kRsq075vn-WtFQW2WBkxHhFflmGGAZEV9FUIQIvMrI-bB2xTMw",
      });
  
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nft = await contract.erc1155.get(tokenId);
  
    let contractMetadata;
  
    try {
      contractMetadata = await contract.metadata.get();
    } catch (e) {}
  
    return {
      props: {
        nft,
        contractMetadata: contractMetadata || null,
      },
      revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    };
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const sdk = new ThirdwebSDK(BstChain , {
        secretKey: "GJSZNQ2zV60Sk9zQdtCleuFW8OMMubv3JJU5kRsq075vn-WtFQW2WBkxHhFflmGGAZEV9FUIQIvMrI-bB2xTMw",
      });
   
    const contract = await sdk.getContract(NFT_COLLECTION_ADDRESS);
  
    const nfts = await contract.erc1155.getAll();
  
    const paths = nfts.map((nft: { metadata: { id: any; }; }) => {
      return {
        params: {
          contractAddress: NFT_COLLECTION_ADDRESS,
          tokenId: nft.metadata.id,
        },
      };
    });
  
    return {
      paths,
      fallback: "blocking", // can also be true or 'blocking'
    };
  };
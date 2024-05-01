import { Container, Heading, Text } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";

export default function ProfilePage() {
    const router = useRouter();
    const {contract: nftCollection} = useContract(NFT_COLLECTION_ADDRESS);

    // const { contract: marketplace} = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");  

    const {data: ownedNfts, isLoading: loadingOwnedNfts} = useOwnedNFTs(
        nftCollection,
        router.query.address as string
    );
    // await contract.erc1155.getAll();

        console.log(ownedNfts);
    return (
        <Container maxW={"1200px"} p={5} className="profilecontainer">
            <Heading mt={20} className="ptext">{"Owned NFT(s)"}</Heading>
            <Text className="ptext">Browse and manage your NFTs from this collection.</Text>
            <NFTGrid 
                data={ownedNfts}
                isLoading={loadingOwnedNfts}
                emptyText={"You don't own any NFTs yet from this collection."}
            />
        </Container>
    )
}
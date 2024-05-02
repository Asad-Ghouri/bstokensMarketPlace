import React, { useState } from "react";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Web3Button,
  useContract,
  useCreateAuctionListing,
  useCreateDirectListing,
} from "@thirdweb-dev/react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  Box,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { Abi } from "../const/addresses";
import { ethers } from "ethers";

import {  toWei } from "@thirdweb-dev/sdk";


import { useToast } from '@chakra-ui/react'
import { useAddress } from "@thirdweb-dev/react";

type Props = {
  nft: NFTType;
};

type DirectFormData = {
  nftContractAddress: string;
  tokenId: string;
  price: string;
  startDate: Date;
  endDate: Date;
};

//Add for Auction
type AuctionFormData = {
  nftContractAddress: string;
  tokenId: string;
  startDate: Date;
  endDate: Date;
  floorPrice: string;
  buyoutPrice: string;
};

export default function SaleInfo({ nft }: Props) {
  const router = useRouter();
  const [Token, setToken] = useState<any>();
  const [TokenId, setTokenId] = useState<any>();
  const [AmountToken, setAmountToken] = useState<any>();
  const [Loading, setLoading] = useState<any>();


  const address = useAddress();
  const toast = useToast()
//   const { contract: marketplace } = useContract(
//     MARKETPLACE_ADDRESS,
//     "marketplace-v3"
//   );

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

//   const { mutateAsync: createDirectListing } =
//     useCreateDirectListing(marketplace);

  async function checkAndProvideApproval() {
    const hasApproval = await nftCollection?.call("isApprovedForAll", [
      nft.owner,
      MARKETPLACE_ADDRESS,
    ]);

    if (!hasApproval) {
      const txResult = await nftCollection?.call("setApprovalForAll", [
        MARKETPLACE_ADDRESS,
        true,
      ]);

      if (txResult) {
        console.log("Approval provided");
      }
    }

    return true;
  }

  const { register: registerDirect, handleSubmit: handleSubmitDirect } =
    useForm<DirectFormData>({
      defaultValues: {
        nftContractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
        price: "0",
        startDate: new Date(),
        endDate: new Date(),
      },
    });

  // Initialize provider and contract
  const abi = Abi;
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
    MARKETPLACE_ADDRESS,
    abi
  );
  async function handleSubmissionDirect(data: DirectFormData) {
    // await checkAndProvideApproval();
    try {
      if(!address){
        toast({
          // position: 'bottom-center',
          render: () => (
            <Box color='white' p={3} bg='red.500'>
              Connect your wallet First
            </Box>
          ),
        })
        return;
      }
      setLoading(true);
  
      const unixTimestamp = Math.floor(new Date(data.endDate).getTime() / 1000);
      console.log("standard date is ", data.endDate);
      console.log("unix date is ", unixTimestamp);
  
      const etherPrice: number = parseInt(data.price);
      const ether = ethers.utils.parseEther(etherPrice.toString());
      // Convert BigNumber to wei
      const weiAmount = ethers.utils.formatUnits(ether, "wei");
  
      console.log("standard price is ", data.price);
      console.log("wei price is ", weiAmount);
  
      const result = await marketplace?.call("createList", [
        Token,
        TokenId,
        AmountToken,
        unixTimestamp,
        weiAmount,
      ]);
      
      setLoading(false)
      toast({
        // position: 'bottom-center',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
            Successfully Done
          </Box>
        ),
      })
      return result;
  } catch (error) {
      console.error("Error creating list:", error);
      setLoading(false)
      toast({
        // position: 'bottom-center',
        render: () => (
          <Box color='white' p={3} bg='red.500'>
           An Error Occurred
          </Box>
        ),
      })
      
  }
  
  }

  //Add for Auction
//   const { mutateAsync: createAuctionListing } =
//     useCreateAuctionListing(marketplace);

  const { register: registerAuction, handleSubmit: handleSubmitAuction } =
    useForm<AuctionFormData>({
      defaultValues: {
        nftContractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
        startDate: new Date(),
        endDate: new Date(),
        floorPrice: "0",
        buyoutPrice: "0",
      },
    });

//   async function handleSubmissionAuction(data: AuctionFormData) {
//     await checkAndProvideApproval();
//     const txResult = await createAuctionListing({
//       assetContractAddress: data.nftContractAddress,
//       tokenId: data.tokenId,
//       buyoutBidAmount: data.buyoutPrice,
//       minimumBidAmount: data.floorPrice,
//       startTimestamp: new Date(data.startDate),
//       endTimestamp: new Date(data.endDate),
//     });

//     return txResult;
//   }

  return (
    <Tabs>
      <TabList>
        <Tab>Direct</Tab>
        {/* <Tab>Auction</Tab> */}
      </TabList>

      <TabPanels>
        <TabPanel>
          <Stack spacing={8}>
            <Box>
              <Text fontWeight={"bold"}>Token:</Text>
              <Input
                placeholder="0"
                size="md"
                type="text"
                value={Token}
                onChange={(e) => {
                  setToken(e.target.value);
                }}
              />
            </Box>

            <Box>
              <Text fontWeight={"bold"}>Token ID:</Text>
              <Input
                placeholder="0"
                size="md"
                type="text"
                value={TokenId}
                onChange={(e) => {
                  setTokenId(e.target.value);
                }}
              />
            </Box>
            <Box>
              <Text fontWeight={"bold"}>amountOfToken:</Text>
              <Input
                placeholder="0"
                size="md"
                type="number"
                value={AmountToken}
                onChange={(e) => {
                  setAmountToken(e.target.value);
                }}
              />
            </Box>

            <Box>
              {/* <Text>Listing starts on:</Text>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                {...registerDirect("startDate")}
                            /> */}
              <Text mt={2}>Deadline:</Text>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                {...registerDirect("endDate")}
              />
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Price:</Text>
              <Input
                placeholder="0"
                size="md"
                type="number"
                {...registerDirect("price")}
              />
            </Box>
            <Web3Button
              contractAddress={MARKETPLACE_ADDRESS}
              action={async () => {
                await handleSubmitDirect(handleSubmissionDirect)();
              }}
              // onSuccess={(txResult) => {
              //   router.push(
              //     `/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`
              //   );
              // }}
            >
             {!Loading? "Create Direct Listing":"Loading..." }
            </Web3Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack spacing={8}>
            <Box>
              <Text>Listing starts on:</Text>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                {...registerAuction("startDate")}
              />
              <Text mt={2}>Listing ends on:</Text>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                {...registerAuction("endDate")}
              />
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Starting bid from:</Text>
              <Input
                placeholder="0"
                size="md"
                type="number"
                {...registerAuction("floorPrice")}
              />
            </Box>
            <Box>
              <Text fontWeight={"bold"}>Buyout price:</Text>
              <Input
                placeholder="0"
                size="md"
                type="number"
                {...registerAuction("buyoutPrice")}
              />
            </Box>
            {/* <Web3Button
              contractAddress={MARKETPLACE_ADDRESS}
              action={async () => {
                return await handleSubmitAuction(handleSubmissionAuction)();
              }}
              onSuccess={(txResult) => {
                router.push(
                  `/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`
                );
              }}
            >
              Create Auction Listing
            </Web3Button> */}
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

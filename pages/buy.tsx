import React,{useState,useEffect} from "react";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";


import Footer1 from "../components/Footer1"
import BFooter from "../components/BFooter"

import SplitScreen from "../components/SplitScreen"


import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BstChain } from "@thirdweb-dev/chains";
import { 
    MARKETPLACE_ADDRESS,
    Abi
} from "../const/addresses";
import { ethers } from 'ethers';



import SalesCard from '../components/SalesCard';

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);
    
    const [salesId, setSalesId] = useState(null);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const sdk = new ThirdwebSDK(BstChain, {
    //                 secretKey: process.env.REACT_APP_API_KEY
    //             });

    //             const contractAddress = MARKETPLACE_ADDRESS;

    //             console.log(process.env.REACT_APP_API_KEY)

                
    //             const contract = await sdk.getContract( contractAddress,Abi );

    //             const id = await contract.call('salesId');
    //             setSalesId(id);
    //             console.log("ids are ",salesId)
    //         } catch (error) {
    //             console.error('Error fetching salesId:', error);
    //         }
    //     };

    //     fetchData();

    // }, []);

    const contractAddress = MARKETPLACE_ADDRESS;
  const contractABI = Abi;

  // Initialize provider and contract
  const provider = new ethers.providers.JsonRpcProvider('https://rpc.bstchain.io');
  const contract1 = new ethers.Contract(contractAddress, contractABI, provider);

  // Function to read from the contract
  const [salesInfoList, setSalesInfoList] = useState([false]);

  // Function to fetch sales information for a single sale ID
//   const fetchSalesInfo = async () => {
//     try {
//         const salesIdHex = await contract1.salesId();
//         const salesIdDecimal = ethers.BigNumber.from(salesIdHex._hex).toString();

//         const balanceBSTC = (parseFloat(salesIdDecimal) - 1).toString();
//         console.log('Sales decimal:', balanceBSTC);
//         const sales = await contract1.sales(balanceBSTC);
//         // console.log('Sales result:', sales.toString());
//       console.log('Sales info:', sales);
//       setSalesInfoList(sales);
//     } catch (error) {
//       console.error('Error fetching sales info:', error);
//     }
//   };

const fetchSalesInfo = async () => {
    try {
        const salesInfoList = [];
        const salesIdHex = await contract1.salesId();
        const salesIdDecimal = ethers.BigNumber.from(salesIdHex._hex).toString();
        const balanceBSTC = parseFloat(salesIdDecimal);

        for (let i = 0; i < balanceBSTC; i++) {
            const sales = await contract1.sales(i);
            salesInfoList.push(sales);
        }

        console.log('Sales info list:', salesInfoList);
        setSalesInfoList(salesInfoList);
    } catch (error) {
        console.error('Error fetching sales info:', error);
    }
};

  // Fetch sales information when component mounts
  useEffect(() => {
    fetchSalesInfo();
  }, []);


console.log("salesInfoList",salesInfoList)
    return (
        <Container maxW={"1200px"} p={5}>
           
           
            <SplitScreen />
            <Heading mt={24} className="ptext">Trending NFTs</Heading>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />


{/* {salesInfoList[0].tokenId?
    <div>
        {salesInfoList.map((salesInfo, index) => (
            <div key={index}>
                <p>Seller: {salesInfo.seller}</p>
                <p>Token: {salesInfo.token}</p>
                <p>Token ID: {ethers.BigNumber.from(salesInfo.tokenId._hex).toString()}</p>
                <p>Amount of Token: {ethers.BigNumber.from(salesInfo.amountOfToken._hex).toString()}</p>
                <p>Deadline: {ethers.BigNumber.from(salesInfo.deadline._hex).toString()}</p>
                <p>Price: {ethers.BigNumber.from(salesInfo.price._hex).toString()}</p>
                <p>Is Sold: {salesInfo.isSold.toString()}</p>
            </div>
        ))}
    </div>
:
""
} */}
{salesInfoList[0].tokenId?
<div className="salespart">
      <Heading mt={24} className="">Sales Information</Heading>
      <div className="sales-cards">
        {salesInfoList.map((salesInfo, index) => (
          <SalesCard
            key={index}
            seller={salesInfo.seller}
            token={salesInfo.token}
            tokenId={ethers.BigNumber.from(salesInfo.tokenId._hex).toString()}
            amountOfToken={ethers.BigNumber.from(salesInfo.amountOfToken._hex).toString()}
            deadline={ethers.BigNumber.from(salesInfo.deadline._hex).toString()}
            price={ethers.BigNumber.from(salesInfo.price._hex).toString()}
            isSold={salesInfo.isSold}
          />
        ))}
      </div>
      
      <div className="sales-cards">
        
          {/* <SalesCard
          
            seller={salesInfoList.seller}
            token={salesInfoList.token}
            tokenId={ethers.BigNumber.from(salesInfoList.tokenId._hex).toString()}
            amountOfToken={ethers.BigNumber.from(salesInfoList.amountOfToken._hex).toString()}
            deadline={ethers.BigNumber.from(salesInfoList.deadline._hex).toString()}
            price={ethers.BigNumber.from(salesInfoList.price._hex).toString()}
            isSold={salesInfoList.isSold}
          /> */}
        {/* <div>
        {salesInfoList.map((salesInfo, index) => (
            <div key={index}>
                <p>Seller: {salesInfo.seller}</p>
                <p>Token: {salesInfo.token}</p>
                <p>Token ID: {ethers.BigNumber.from(salesInfo.tokenId._hex).toString()}</p>
                <p>Amount of Token: {ethers.BigNumber.from(salesInfo.amountOfToken._hex).toString()}</p>
                <p>Deadline: {ethers.BigNumber.from(salesInfo.deadline._hex).toString()}</p>
                <p>Price: {ethers.BigNumber.from(salesInfo.price._hex).toString()}</p>
                <p>Is Sold: {salesInfo.isSold.toString()}</p>
            </div>
        ))}
    </div> */}
      </div>
</div>
    :
    ""
}


            {/* <div className="flex">
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
                <img src="https://itishstudios.net/assert/nft.jpeg" alt="" />
            </div> */}
            <Heading mt={14} id="dnft" className="ptext">Discover NFTs</Heading>
            <Text className="ptext">Browse and buy NFTs from this collection.</Text>
            {/* <Heading mt={5}>Hold On Nft coming soon</Heading> */}
           
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
           <Stack mt={20}> <Footer1  /> </Stack> 
        <BFooter />
        </Container>
    )
};
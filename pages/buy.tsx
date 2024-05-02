import React,{useState,useEffect} from "react";
import { Container, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";


import Footer1 from "../components/Footer1"
import BFooter from "../components/BFooter"

import Footer2 from "../components/Footer2.tsx"


import SplitScreen from "../components/SplitScreen"


import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BstChain } from "@thirdweb-dev/chains";
import { 
    MARKETPLACE_ADDRESS,
    Abi
} from "../const/addresses";
import { ethers } from 'ethers';


import { ThirdwebNftMedia  } from "@thirdweb-dev/react";


import SalesCard from '../components/SalesCard';
import Link from "next/link";

import { Alert } from "flowbite-react";

import { Spinner } from "@chakra-ui/react";

import { Divider } from '@chakra-ui/react'

const CustomSpinner = () => {
  return <Spinner color="blue.500" size="xl" />;
};

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
  const [salesInfoList, setSalesInfoList] = useState<any[]>([]);


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
        const salesInfoList: any[] = []; // Explicitly type salesInfoList as an array of any
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


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


console.log("salesInfoList",salesInfoList)
    return (
     
        <Container maxW={"1200px"} p={5}>
           
           
            <SplitScreen />

            {/* <Alert color="info">Alert!</Alert>; */}

{salesInfoList.length > 0?
<div className="salespart">
      <Heading mt={24} className="">Top NFTs In Our MarketPlace</Heading>
      <div className="sales-cards">
        {salesInfoList.map((salesInfo, index) => (
         <Link
         key={index}
         className="card"
         href={{
           pathname: `/token/${NFT_COLLECTION_ADDRESS}/${ethers.BigNumber.from(salesInfo.tokenId._hex).toString()}`,
           query: {
             // Pass additional arguments here as query parameters
             seller: salesInfo.seller,
             token: salesInfo.token,
             tokenId: ethers.BigNumber.from(salesInfo.tokenId._hex).toString(),
             amountOfToken: ethers.BigNumber.from(salesInfo.amountOfToken._hex).toString(),
             deadline: ethers.BigNumber.from(salesInfo.deadline._hex).toString(),
             price: ethers.BigNumber.from(salesInfo.price._hex).toString(),
             isSold: salesInfo.isSold,

             // Add more query parameters as needed
           },
         }}
       >
          <SalesCard
            key={index}
            seller={salesInfo.seller}
            token={salesInfo.token}
            tokenId={ethers.BigNumber.from(salesInfo.tokenId._hex).toString()}
            amountOfToken={ethers.BigNumber.from(salesInfo.amountOfToken._hex).toString()}
            deadline={ethers.BigNumber.from(salesInfo.deadline._hex).toString()}
            price={ethers.BigNumber.from(salesInfo.price._hex).toString()}
            isSold={salesInfo.isSold}
            // urls=""
          />
           </Link>
        ))}
      </div>
</div>
    :
    <Skeleton  height={"322px"} width={"312px"} className="sloader" />
    // <img src="https://icon-park.com/imagefiles/loading7_pink.gif" className="loader" alt="" />
}

         
<Heading mt={24} className="ptext">Recently Minted</Heading>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />

           <Stack mt={20}> 
           <Divider />
           <Footer2  /> 
           </Stack> 
        </Container>
    )
};
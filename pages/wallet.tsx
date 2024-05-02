import type { NextPage } from "next";

import {Box, Divider} from "@chakra-ui/react";

import Footer1 from "../components/Footer1"
import BFooter from "../components/BFooter"
import React from "react";
import Footer2 from "../components/Footer2.tsx"

const wallet: NextPage = () => {
    return (
        <>
        <div>
        <div className="centered">
            <iframe
            src="https://chrome-extension-zeta-seven.vercel.app"
            width="366" // Set the desired width for the iframe
            height="660" // Set the desired height for the iframe
            title="External Page"
            frameBorder="0"
          ></iframe>
        </div>
          
        <Box className="wff">
        <Divider />
          <Footer2 />  </Box>
          {/* <BFooter /> */}
        </div>
        </>
    );
  };
  
  export default wallet;
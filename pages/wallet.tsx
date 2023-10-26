import type { NextPage } from "next";

import {Box} from "@chakra-ui/react";

import Footer1 from "../components/Footer1"
import BFooter from "../components/BFooter"

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
          
        <Box className="wff"><Footer1 />  </Box>
          <BFooter />
        </div>
        </>
    );
  };
  
  export default wallet;
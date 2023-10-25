import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

import Footer from "../components/Footer"
import BFooter from "../components/BFooter"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThirdwebProvider 
    clientId="c63fd3dcf8c9eec46c253e543b0ff569"
    activeChain={activeChain}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer />
        <BFooter /> */}
      </ChakraProvider>
    </ThirdwebProvider>
    </>
  );
}

export default MyApp;

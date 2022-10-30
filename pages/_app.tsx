import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
  chainRpc={{ [ChainId.Mumbai]: "https://polygon-mumbai.g.alchemy.com/v2/XAkaCpfpBPvU3UUT0mitlo0M8j8NAVW6" }}
  desiredChainId={ChainId.Mumbai}
  >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

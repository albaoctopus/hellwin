import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
  chainRpc={{ [ChainId.Polygon]: "https://polygon-mainnet.g.alchemy.com/v2/IKbZm-k16G9y_oaQ8bW5lf7k1vmlQ_92" }}
  desiredChainId={ChainId.Polygon}
  >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import '../styles/globals.css'

// 4 Rinkeby
const supportedChainIds = [4, 137];

const connectors = {
  injected: {},
}

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

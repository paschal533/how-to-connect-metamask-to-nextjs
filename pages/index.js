import { useWeb3 } from "@3rdweb/hooks";

export default function Home() {
  const { address, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div style={{ width:"100vw", height:"100vh", justifyContent: "center", display: "flex", 
       flexDirection: "column", alignItems: "center"}}>
      {!address &&
        <button onClick={() => connectWallet("injected")}>
          Connect Wallet
        </button>}
        <p>
          {address ? address : "Click on the button above to connect to your metamask accout."}
        </p>
        {address && <button onClick={() => disconnectWallet()}>
          disconnect Wallet
        </button>}
    </div>
  )
}

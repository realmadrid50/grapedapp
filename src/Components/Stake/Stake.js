import "./Stake.css";
import "../Navbar/Navbar.css";

import { useState } from "react";

function Stake() {
  const [connected, setConnected] = useState(false);

  const connectToMetamask = async () => {
    try {
      // Add the Arbitrum network to Metamask
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0xa4b1',
          chainName: 'Arbitrum',
          nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://arb1.arbitrum.io/rpc'],
          blockExplorerUrls: ['https://arbiscan.io/']
        }]
      });
  
      // Get the chain ID of the current provider
      const providerChainId = await window.ethereum.request({ method: 'eth_chainId' });
  
      // Switch to the Arbitrum network if the provider is on the correct chain
      if (providerChainId === '0xa4b1') {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa4b1' }]
        });
        
        // Request permission to access the user's Metamask account
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to Metamask with address:', accounts[0]);
  
        // Update the button text to indicate that the user is connected
        setConnected(true);
      } else {
        console.error(`Provider chain ID (${providerChainId}) does not match expected chain ID (0xa4b1).`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div className="main">
      <div className="wrap">
        <div className="header">
            
        </div>
        <div className="stake-card">
          <div className="stake-title">
            <h1>LEVIA Staking (3,3)</h1>
            <p>
              You can stake or unstake whenever you want. But you will not get
              any rebasing rewards. The rewards are canceled because of the
              redistribution.
            </p>
          </div>

          <div className="stake-infos">
            <div className="bubble-one">
              <h1>APY</h1>
              <h2>0%</h2>
            </div>
            <div className="bubble-one">
              <h1>TVL</h1>
              <h2>$-</h2>
            </div>
            <div className="bubble-one">
              <h1>Current Index</h1>
              <h2>- LEVIA</h2>
            </div>
          </div>

          <div className="unstake-stake">
            <h2>Stake</h2>
            <h2>Unstake</h2>
          </div>
          <div className="amount-input">
            <div className="item-1">
              <div className="max">
                <h3>Max</h3>
              </div>
              <input type="number" placeholder="Amount"></input>
            </div>
            <div className="item-2">
              <button>Approve</button>
            </div>
          </div>

          <div className="paragraph">
            <p>
              Note: The "Approve" transaction is only needed when
              staking/unstaking for the first time; subsequent staking/unstaking
              only requires you to perform the "Stake" or "Unstake" transaction.
            </p>
          </div>

          <div className="list-final">
            <div className="row-element">
              <h5>Your Balance</h5>
              <h5>0 LEVIA</h5>
            </div>
            <div className="row-element">
              <h5>Your Staked Balance</h5>
              <h5>0 LEVIA</h5>
            </div>
            <div className="row-element">
              <h5>Next Reward Amount</h5>
              <h5>0 LEVIA</h5>
            </div>
            <div className="row-element">
              <h5>ROI 5-Day Rate</h5>
              <h5>0%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;

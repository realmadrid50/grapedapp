import { useState, useEffect } from 'react';

const useConnection = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Check if the user is already connected to the Arbitrum network
        const providerChainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (providerChainId === '0x2105') {
          setConnected(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkConnection();
  }, []);

  const connectToMetamask = async () => {
    try {
      // Check if the user is already connected to the Arbitrum network
      const providerChainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (providerChainId === '0x2105') {
        console.log('Already connected to the Arbitrum network.');
        setConnected(true);
        return;
      }

      // Add the Arbitrum network to Metamask
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x2105',  // Chain ID for Base Mainnet
          chainName: 'Base Mainnet',
          nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://mainnet.base.org'],  // RPC Endpoint for Base Mainnet
          blockExplorerUrls: ['https://basescan.org/']  // Block Explorer for Base Mainnet
        }]
      });

      // Get the chain ID of the current provider
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      // Switch to the Arbitrum network if the provider is on the correct chain
      if (chainId === '0x2105') {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x2105' }]
        });

        // Request permission to access the user's Metamask account
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to Metamask with address:', accounts[0]);

        // Update the connection state
        setConnected(true);
      } else {
        console.error(`Provider chain ID (${chainId}) does not match expected chain ID (0x2105).`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectFromMetamask = async () => {
    try {
      // Switch back to the Ethereum Mainnet
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }]
      });

      // Reset the connection state
      setConnected(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { connected, connectToMetamask, disconnectFromMetamask };
};

export default useConnection;

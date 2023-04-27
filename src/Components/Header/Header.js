import './Header.css'
import { useState } from "react";
import Web3 from 'web3';

function Header(){

    const [connected, setConnected] = useState(false);

    const connectToMetamask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setConnected(true);
          console.log('Connected to MetaMask with account:', accounts[0]);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Please install MetaMask');
      }
    };
    
  
    
    return (
        <div className="top-header">
            <button onClick={connectToMetamask}>
            {connected ? "Connected" : "Connect Wallet"}
            </button>
      </div>
    );
}


export default Header;
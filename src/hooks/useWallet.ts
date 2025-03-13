import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

export function useWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [nfts, setNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedAccount = localStorage.getItem("walletAddress");
    if (storedAccount) {
      setAccount(storedAccount);
      fetchNFTs(storedAccount);
    }
  }, []);

  const connectWallet = async () => {
    try {
      setIsLoading(true);
      const provider = (await detectEthereumProvider()) as any;
      if (!provider) {
        alert("MetaMask not detected. Please install MetaMask.");
        return;
      }

      const web3Provider = new ethers.BrowserProvider(provider);
      const accounts = await web3Provider.send("eth_requestAccounts", []);

      if (!accounts.length) {
        console.warn("No accounts returned by MetaMask");
        return;
      }

      setAccount(accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);
      fetchNFTs(accounts[0]);
    } catch (error: any) {
      console.error("Wallet connection error:", error);
      handleWalletError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNFTs = async (walletAddress: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${walletAddress}&limit=10`
      );
      const data = await response.json();
      setNfts(data.assets || []);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletError = (error: any) => {
    if (error.code === "ACTION_REJECTED") {
      alert("You rejected the connection request. Please try again.");
    } else if (error.code === -32002) {
      alert("Connection request already pending. Please check your MetaMask.");
    } else {
      alert("Failed to connect wallet. Please try again.");
    }
  };

  return { account, connectWallet, nfts, isLoading };
}

import Link from "next/link";
import Button from "./Button";
import { useWallet } from "@/hooks/useWallet";
import Head from "next/head";

const Header = () => {
  const { account, connectWallet } = useWallet();

  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="Discover, Collect & Sell Extraordinary NFTs"
        />
      </Head>
      <header className="w-full flex justify-between items-center py-6   max-w-7xl mx-auto text-lg">
        <Link href="/" legacyBehavior>
          <a className="text-4xl font-bold text-primary">NFT MarketPlace</a>
        </Link>
        <nav className="flex space-x-8">
          <Link href="/marketplace" legacyBehavior>
            <a className="hover:text-primary">Marketplace</a>
          </Link>
          <Link href="/collections" legacyBehavior>
            <a className="hover:text-primary">Collection</a>
          </Link>
          <Link href="/community" legacyBehavior>
            <a className="hover:text-primary">Community</a>
          </Link>
          <Link href="/create" legacyBehavior>
            <a className="hover:text-primary">Create</a>
          </Link>
        </nav>
        {account ? (
          <span className="text-green-400">
            Connected: {account.substring(0, 6)}...
            {account.substring(account.length - 4)}
          </span>
        ) : (
          <Button
            label="Connect Wallet"
            className="bg-primary text-lg px-6"
            onClick={connectWallet}
          />
        )}
      </header>
    </>
  );
};

export default Header;

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MainImage from "../assets/images/main.png";
import Button from "../components/Button";
import { useWallet } from "@/hooks/useWallet";
import Header from "@/components/Header";

export default function Home() {
  const { account, connectWallet } = useWallet();

  return (
    <div className="bg-dark text-textPrimary min-h-screen flex flex-col items-center px-6">
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-12">
        <div className="text-left max-w-lg">
          <h2 className="text-6xl font-extrabold leading-tight">
            Discover, Collect, & Sell{" "}
            <span className="text-purple-400">Extraordinary</span> NFTs
          </h2>
          <p className="mt-6 text-textSecondary text-xl">
            The Leading NFT Marketplace On Ethereum. Home To The Next Generation
            Of Digital Creators. Discover The Best NFT Collections.
          </p>
          <div className="mt-8 flex space-x-6">
            <Link href="/explore" legacyBehavior>
              <a>
                <Button label="Explore" className="bg-primary text-xl px-10" />
              </a>
            </Link>
            <Link href="/create" legacyBehavior>
              <a>
                <Button
                  label="Create"
                  variant="secondary"
                  className="text-xl px-10 border-white"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0 w-full md:w-1/3 flex justify-center border-2 border-borderGray rounded-xl p-3 bg-gray-900">
          <Image
            src={MainImage}
            alt="NFT Marketplace Banner"
            width={420}
            height={680}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="flex flex-row justify-between absolute bottom-7 -left-20 bg-gradient-to-r from-gray-800  opacity-90 to-gray-400 px-6 py-4 rounded-xl flex flex-col w-64 items-center">
            <div>
              <p className="text-white text-base font-semibold">Total ETH</p>
              <p className="text-gray-400 text-xs">Floor Price: 1.2 ETH</p>
            </div>
            <div>
              <p className="text-white   font-bold">12.35 ETH</p>
              <p className="text-green-400 text-sm">+12.45%</p>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full max-w-7xl mx-auto py-12 flex justify-around text-center">
        <div>
          <p className="text-3xl font-bold text-white">432K+</p>
          <p className="text-lg text-purple-400">Collections</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">200K+</p>
          <p className="text-lg text-purple-400">Artists</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">10K+</p>
          <p className="text-lg text-purple-400">Community</p>
        </div>
      </section>
    </div>
  );
}

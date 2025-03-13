import React, { useState } from "react";
import { useWallet } from "@/hooks/useWallet";
import Image from "next/image";
import Header from "@/components/Header";

const categories = [
  "Art",
  "Collectibles",
  "Metaverse",
  "Virtual Worlds",
  "Sports",
  "Music",
];

export default function Collections() {
  const { nfts, isLoading } = useWallet();
  const [selectedCategory, setSelectedCategory] = useState("Art");

  return (
    <>
      <Header />
      <div className="bg-dark text-white min-h-screen px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-purple-400">
          Top Collections
        </h1>

        <div className="flex justify-center space-x-4 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-lg ${
                selectedCategory === category ? "bg-purple-500" : "bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {isLoading ? (
            <p className="text-center text-lg">Loading NFTs...</p>
          ) : nfts.length > 0 ? (
            nfts.map((nft) => (
              <div
                key={nft.id}
                className="bg-gray-900 p-4 rounded-xl shadow-lg"
              >
                <Image
                  src={nft.image_url}
                  alt={nft.name}
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
                <h2 className="text-xl font-bold mt-4">{nft.name}</h2>
                <p className="text-gray-400">{nft.collection?.name}</p>
                <p className="text-green-400 font-semibold">
                  {nft.last_sale?.total_price / 1e18 || "-"} ETH
                </p>
                <p className="text-gray-400 text-sm">
                  Floor Price: {nft.floor_price || "-"} ETH
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No NFTs found.</p>
          )}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-purple-600 rounded-full text-lg">
            See more
          </button>
        </div>
      </div>
    </>
  );
}

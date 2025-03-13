import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/">
        <a className="text-xl font-bold">NFT Marketplace</a>
      </Link>
      <Link href="/explore">
        <a>Explore</a>
      </Link>
    </nav>
  );
}

import NFTCard from "../components/NFTCard";

export default function Explore() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Explore NFTs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <NFTCard
          imageUrl="https://via.placeholder.com/300"
          title="Cool NFT #1"
          price="0.5 ETH"
          owner="@user1"
        />
        <NFTCard
          imageUrl="https://via.placeholder.com/300"
          title="Cool NFT #2"
          price="0.8 ETH"
          owner="@user2"
        />
        <NFTCard
          imageUrl="https://via.placeholder.com/300"
          title="Cool NFT #3"
          price="1.2 ETH"
          owner="@user3"
        />
      </div>
    </div>
  );
}

import React from "react";

export default function NFTCard({ imageUrl, title, price, owner }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-500">Owned by {owner}</p>
      <p className="text-green-500 font-bold mt-1">{price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
}

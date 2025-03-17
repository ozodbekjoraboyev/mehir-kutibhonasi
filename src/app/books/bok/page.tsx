import Image from "next/image";
import React from "react";

function Book({ item }:any) {
  return (
    <div
      key={item.id}
      className="bg-white shadow-md rounded-lg overflow-hidden p-4"
    >
      <div className="flex justify-center mb-2">
        <Image
          width={150}
          height={200}
          src={item.image}
          alt={item.name}
          className="rounded-md object-contai"
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{item.name}</h3>
    </div>
  );
}

export default Book;

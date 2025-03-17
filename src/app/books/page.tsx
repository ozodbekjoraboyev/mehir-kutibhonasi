"use client";
import LoadingAnimation from "@/loading/page";
import { BooksType } from "@/type/page";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search01Icon from "../../../public/search-01-stroke-rounded";
import Book from "./bok/page";
function Books() {
  const [books, setBooks] = useState<BooksType[] | null>(null);
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    axios
      .get(`https://library.softly.uz/api/app/books?size=20&page=1&order=DESC`)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  if (!books) {
    return <LoadingAnimation />;
  }

  const searchInputFilter = books?.filter((item) => {
    return item.name.toUpperCase().includes(searchInput.toUpperCase());
  });
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold pb-5 pt-5 text-center">Kitoblar</h2>
      <div className="pb-5 justify-between flex  items-center">
        <div>
          <button className=" bg-blue-700 text-white font-semibold text-xl p-2 rounded-md px-6 ml-">
            Barchasi
          </button>
          <button className=" bg-gray-300 text-black font-semibold text-xl p-2 rounded-md px-6 ml-6">
            Band
          </button>
          <button className=" bg-gray-300 text-black font-semibold text-xl p-2 rounded-md px-6 ml-6">
            Bo'sh
          </button>
        </div>
        <div className=" border border-blue-700 p-2 rounded-md  flex">
          <input
            value={searchInput}
            type="text"
            className="w-full outline-none bg-transparent text-lg sm:text-xl "
            placeholder="Type something..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2">
            <Search01Icon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchInputFilter.map((item) => (
          <Book item={item} />
          // <div
          //   key={item.id}
          //   className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          // >
          //   <div className="flex justify-center mb-2">
          //     <Image
          //       width={150}
          //       height={200}
          //       src={item.image}
          //       alt={item.name}
          //       className="rounded-md object-contai"
          //     />
          //   </div>
          //   <h3 className="text-lg font-semibold text-center">{item.name}</h3>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

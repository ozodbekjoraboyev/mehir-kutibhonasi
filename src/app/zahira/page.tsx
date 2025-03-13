"use client";
import { FewBooks } from "@/type/page";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Zahira() {
  const [few_books, setFew_books] = useState<FewBooks[]>();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://library.softly.uz/api/app/stats`).then((res) => {
      // console.log(res.data.few_books);
      setFew_books(res.data.few_books);
    });
  }, []);

  const searchInputFilter = few_books?.filter((item) => {
    return item.name.toUpperCase().includes(searchInput.toUpperCase());
  });

  return (
    <div className="container m-auto pl-32 pr-32 ">
      <p className="font-bold text-2xl text-center p-2 pb-4">
        📚 Zarur(yetishmayotgan) kitoblar
      </p>
      <div>
        <div className=" flex w-2xl m-auto border-blue-600 border-2 rounded p-2 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            value={searchInput}
            type="text"
            className="w-full outline-none bg-transparent text-xl"
            placeholder="Type something..."
            onChange={(e) => {
              console.log(e.target.value);
              setSearchInput(e.target.value);
            }}
          />
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Search
          </button>
        </div>

        {searchInputFilter?.map((item, index) => {
          return (
            <div key={item.bookId} className="">
              <p className=" text-2xl ">
                <span className=" font-bold text-xl">{index + 1}</span>.{" "}
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Zahira;

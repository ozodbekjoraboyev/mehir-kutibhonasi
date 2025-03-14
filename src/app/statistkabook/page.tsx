import Image from "next/image";
import Link from "next/link";
import React from "react";

function StatistkaBook() {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-center text-2xl font-bold">Kutubxona statistikasi</h1>
        <Link href={"/statistka"}>
          <h2 className="text-center pt-2 text-xl text-blue-700 font-semibold hover:underline">
            To’liq ko’rish
          </h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={"https://mehrkutubxonasi.uz/assets/images/man-teacher.png"}
            alt="kitobxonlar"
          />
          <p className="font-semibold text-xl sm:text-2xl">Kitobxonlar</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={"https://mehrkutubxonasi.uz/assets/images/open-book.png"}
            alt="o'qilyotgan kitoblar"
          />
          <p className="font-semibold text-xl sm:text-2xl">O'qilayotgan kitoblar</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={"https://mehrkutubxonasi.uz/assets/images/check-mark.png"}
            alt="o'qilgan kitoblar"
          />
          <p className="font-semibold text-xl sm:text-2xl">O'qilgan kitoblar</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={"https://mehrkutubxonasi.uz/assets/images/books.png"}
            alt="barcha kitoblar"
          />
          <p className="font-semibold text-xl sm:text-2xl">Barcha kitoblar</p>
        </div>
      </div>
    </div>
  );
}

export default StatistkaBook;
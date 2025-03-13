import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavbarTop() {
  return (
    <div className=" bg-white ">
      <div className=" container m-auto pl-32 pr-32">
        <div className=" flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                width={150}
                height={150}
                src={
                  "https://mehrkutubxonasi.uz/assets/images/svg-hor-logo-mehr.svg"
                }
                alt="navbahome"
              />
            </Link>
          </div>

          <ul>
            <li className=" flex gap-5 font-bold text-xl ">
              <Link href={"/manzil"}>
                <p className="text-blue-700 hover:text-blue-900 hover:tracking-wide transition-all duration-300">
                  Manzil
                </p>
              </Link>
              <Link href={"/"}><p className="text-blue-700 hover:text-blue-900 hover:tracking-wide transition-all duration-300">
                Hissa qo&apos;shish
              </p></Link>
           <Link href={"/zahira"}>   <p className="text-blue-700 hover:text-blue-900 hover:tracking-wide transition-all duration-300">
                Zarur kitoblar
              </p></Link>
              <p className="text-blue-700 hover:text-blue-900 hover:tracking-wide transition-all duration-300">
                Statistika
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;

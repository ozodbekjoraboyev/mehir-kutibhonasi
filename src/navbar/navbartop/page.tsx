"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Menu01Icon from "../../../public/menu-01-stroke-rounded (1)"
import Cancel01Icon from "../../../public/cancel-01-stroke-rounded (1)"

function NavbarTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-8 lg:px-32">
        <div className="flex items-center justify-between py-4">
          
          <div>
            <Link href="/">
              <Image
                width={150}
                height={150}
                src="https://mehrkutubxonasi.uz/assets/images/svg-hor-logo-mehr.svg"
                alt="navbahome"
              />
            </Link>
          </div>

     
          <ul className="hidden md:flex gap-5 font-bold text-lg">
            <Link href="/manzil">
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Manzil
              </p>
            </Link>
            <Link href="/hissa">
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Hissa qo&apos;shish
              </p>
            </Link>
            <Link href="/zahira">
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Zarur kitoblar
              </p>
            </Link>
          <Link href={"/statistka"}>  <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
              Statistika
            </p></Link>
          </ul>

          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <Cancel01Icon size={30} /> : <Menu01Icon size={30} />}
            </button>
          </div>
        </div>

      
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-white shadow-md p-4 rounded-lg">
            <Link href="/manzil" onClick={() => setIsOpen(false)}>
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Manzil
              </p>
            </Link>
            <Link href="/hissa" onClick={() => setIsOpen(false)}>
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Hissa qo&apos;shish
              </p>
              
            </Link>
            <Link href="/zahira" onClick={() => setIsOpen(false)}>
              <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
                Zarur kitoblar
              </p>
            </Link>
           <Link href={"/statistka"}> <p className="text-blue-700 hover:text-blue-900 transition-all duration-300">
              Statistika
            </p></Link>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavbarTop;

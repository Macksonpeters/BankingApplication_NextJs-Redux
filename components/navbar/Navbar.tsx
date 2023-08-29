"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import NavbarToggler from "./NavbarToggler";
import { Cross as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navClose, setNavClose] = useState(false);

  return (
    <header
      className={`fixed w-screen  lg:py-4 z-50 ${
        navOpen && "bg-[#541f56] xl:bg-transparent"
      } `}
    >
      <div className="xl:flex justify-between px-5 lg:px-10 xl:px-10">
        <div className="flex justify-between">
          <div className="px-1 lg:px-0">
            <Link href="/application">
              <h1 className="text-center mt-2 text-[#c65f2b] text-lg  font-bold fontShadowInto md:text-lg lg:text-xl xl:text-2xl xl:mt-0">
                Ou
                <span
                  className={`text-[#541f56] text-xl md:text-xl xl:text-3xl ${
                    navOpen && "text-white xl:text-[#541f56]"
                  } `}
                >
                  X
                </span>
                Pay
              </h1>
            </Link>
          </div>

          <div className="text-[#c65f2b] block xl:hidden cursor-pointer">
            <span
              className=""
              onClick={() => {
                setNavOpen(!navOpen);
                // setNavClose(!navClose);
              }}
            >
              {" "}
              <Hamburger duration={0.3} size={26} />
            </span>
          </div>
        </div>

        <div className="mt-0  xl:h-auto xl:block xl:mt-1 xl:relative xl:right-28 2xl:right-40">
          <div
            className={`mx-auto my-1 xl:my-0 xl:mx-0 ${
              navOpen
                ? "text-[#c65f2b] px-1 flex flex-col tracking-wide text-base Vsmall:text-sm xl:mt-2 xl:bg-transparent xl:flex xl:flex-row xl:gap-11 xl:text-[#c65f2b] xl:tracking-wide xl:text-base"
                : "hidden xl:mt-2 xl:flex xl:gap-11 xl:text-[#c65f2b] xl:tracking-wide xl:text-base"
            }`}
          >
            <Link
              onClick={() => {
                setNavOpen(!navOpen);
                // setNavClose(!navClose);
              }}
              href="/application"
              className="my-2 xl:my-0 xl:mx-4 hindfont "
            >
              Home
            </Link>

            <Link
              onClick={() => {
                setNavOpen(!navOpen);
                setNavClose(!navClose);
              }}
              href="/application/about"
              className=" my-2 xl:my-0 xl:mx-4 hindfont "
            >
              About
            </Link>

            <Link
              onClick={() => {
                setNavOpen(!navOpen);
                // setNavClose(!navClose);
              }}
              href="/application/sendmoney"
              className=" my-2 xl:my-0 xl:mx-4 hindfont "
            >
              Payments
            </Link>

            <Link
              onClick={() => {
                setNavOpen(!navOpen);
                setNavClose(!navClose);
              }}
              href="/application/getStarted"
              className=" my-2 xl:mx-4 hindfont w-[50%] text-center hover:bg-white hover:text-[#541f56] border border-[#c65f2b] hover:ease-in hover:duration-300 hover:border-[#541f56] px-3 Vsmall:text-sm py-2 rounded-lg text-white text-base xl:px-8 xl:w-auto xl:my-0 xl:py-1 lg:relative lg:top-[-5px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

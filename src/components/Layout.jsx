import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Layout({ children }, props) {
  const [subMenu, setSubMenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  //disable scroll when mobile menu is open

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <Head>
        <title>ZESTIOT</title>
        <meta property="og:title" content={`${props.title}`} key="title" />
      </Head>

      {mobileMenuOpen && (
        <div className="fixed  top-32 bg-white h-screen w-full overflow-hidden z-[99999]"></div>
      )}

      {subMenu === "what" && (
        <div
          onMouseOut={() => setSubMenu("")}
          className=" fixed top-32 h-40 bg-primary-100 w-full z-[99999]"
        ></div>
      )}
      {subMenu === "products" && (
        <div
          onMouseOut={() => setSubMenu("")}
          className=" fixed top-32 h-40 bg-primary-100 w-full z-[99999]"
        ></div>
      )}
      {subMenu === "resources" && (
        <div
          onMouseOut={() => setSubMenu("")}
          className=" fixed top-32 h-40 bg-primary-100 w-full z-[99999]"
        ></div>
      )}

      <nav className=" h-32 w-full flex md:justify-around  justify-between items-center bg-white px-2  py-3 shadow-md fixed top-0 z-[999] ">
        <Link className=" relative md:w-32 w-24 h-full" href="/">
          <div>
            <Image
              className=" md:object-center  object-left"
              src="/zestiot.svg"
              alt="logo"
              fill
            />
          </div>
        </Link>

        <div className="flex gap-1 ">
          <div
            onClick={
              mobileMenuOpen
                ? () => setMobileMenuOpen(false)
                : () => setMobileMenuOpen(true)
            }
            className=" md:hidden block"
          >
            {mobileMenuOpen ? (
              <Image
                height={40}
                width={40}
                alt="burger menu"
                src="/burgerOpen.svg"
              ></Image>
            ) : (
              <Image
                height={40}
                width={40}
                alt="burger menu"
                src="/burgerClose.svg"
              ></Image>
            )}
          </div>

          <div
            onClick={
              subMenu === "what"
                ? () => setSubMenu("")
                : () => setSubMenu("what")
            }
            className=" cursor-pointer mt-2 lg:flex hidden px-5 text-[#6F7073] font-medium items-center gap-1 "
          >
            What we do
            <span>
              <Icon
                icon="iconamoon:arrow-right-2"
                rotate={subMenu === "what" ? 1 : "0"}
              />
            </span>
          </div>

          <div
            onClick={
              subMenu === "products"
                ? () => setSubMenu("")
                : () => setSubMenu("products")
            }
            className=" cursor-pointer mt-2 lg:flex hidden px-5 text-[#6F7073] font-medium items-center  gap-1"
          >
            Company
            <span>
              <Icon
                icon="iconamoon:arrow-right-2"
                rotate={subMenu === "products" ? 1 : "0"}
              />
            </span>
          </div>
          <div
            onClick={
              subMenu === "resources"
                ? () => setSubMenu("")
                : () => setSubMenu("resources")
            }
            className=" cursor-pointer mt-2 lg:flex hidden px-5 text-[#6F7073] font-medium items-center gap-1"
          >
            Resources
            <span>
              <Icon
                icon="iconamoon:arrow-right-2"
                rotate={subMenu === "resources" ? 1 : "0"}
              />
            </span>
          </div>

          <Link href="/">
            <button className=" rounded-md  lg:block hidden px-11 font-medium h-12 text-xl bg-primary-100 text-white ">
              Book a Meeting
            </button>
          </Link>
        </div>
      </nav>

      {children}
      <footer className=" text-white bg-[#1B1B1B] px-3 py-10">
        <section className=" bg-[#1B1B1B] grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          <div className="relative w-full h-full min-h-[100px]">
            <Image
              className="p-2 object-left md:object-center  object-contain"
              src="/zestwhite.svg"
              alt="logo"
              fill
            />
          </div>
          <section className="flex gap-4 md:gap-14 md:justify-start justify-around  lg:justify-between items-start flex-wrap">
            <div>
              <span className="  text-lg md:text-xl underline font-medium ">
                Product
              </span>

              <div className="mt-2 flex items-center gap-1">
                <Icon icon="ep:arrow-right-bold" width="10" height="10" /> Demo
              </div>
              <div className="flex items-center gap-1 mt-1">
                {" "}
                <Icon icon="ep:arrow-right-bold" width="10" height="10" />{" "}
                Technology
              </div>
            </div>
            <div>
              <span className=" mb-3 text-lg md:text-xl underline font-medium ">
                Company
              </span>
              <div className="mt-2 flex items-center gap-1">
                <Icon icon="ep:arrow-right-bold" width="10" height="10" /> Team
              </div>
              <div className="flex items-center gap-1 mt-1">
                {" "}
                <Icon icon="ep:arrow-right-bold" width="10" height="10" />
                Career
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Icon icon="ep:arrow-right-bold" width="10" height="10" />
                Partners
              </div>
            </div>
            <div>
              <span className=" mb-3 text-lg md:text-xl underline font-medium ">
                Resources
              </span>
              <div className="mt-2 flex items-center gap-1">
                <Icon icon="ep:arrow-right-bold" width="10" height="10" /> Media
              </div>
              <div className="flex items-center gap-1 mt-1">
                {" "}
                <Icon icon="ep:arrow-right-bold" width="10" height="10" /> Case
                Study
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Icon icon="ep:arrow-right-bold" width="10" height="10" />
                Blogs
              </div>
            </div>
          </section>
          <section className="flex lg:justify-end px-2 lg:pr-14 ">
            <div>
              <span className=" mb-3 text-lg md:text-xl underline font-medium ">
                Address
              </span>
              <div className="mt-2 flex items-center gap-1 max-w-lg">
                <Icon icon="carbon:location-filled" width="15" height="15" />{" "}
                2nd Floor, Plot 28, Rd Number 76, opposite Maha
                <br /> News Office, Jubilee Hills, Hyderabad,
                <br /> Telangana 500033
              </div>
              <div className="flex items-center gap-1 max-w-lg pt-5">
                <Icon icon="carbon:location-filled" width="15" height="15" />{" "}
                ZESTIOT TECHNOLOGIES B.V. , Steenovenweg 5,
                <br className="hidden md:block" /> 5708HN Helmond, NL
              </div>
            </div>
          </section>
        </section>
        <section className="mt-10 w-full text-center">
          © 2021 ZestIOT, All rights reserved.
        </section>
        <section className=" text-[#8C8C8C] text-base font-normal mt-5 w-full text-center">
          Designed and developed by{" "}
          <a href="https://www.sfurti.net" className=" underline">
            Studio Raada
          </a>
          , in partnership with{" "}
          <a href="https://www.angle.services" className=" underline">
            Angle
          </a>
          .
        </section>
      </footer>
    </>
  );
}

import React, { useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Layout({ children }, props) {
  return (
    <>
      <Head>
        <title>ZESTIOT</title>
        <meta property="og:title" content={`${props.title}`} key="title" />
      </Head>

      <nav className="h-20 w-full flex justify-between items-center bg-white px-4 py-2 shadow-md fixed top-0 z-[999]  ">
        <Link className=" relative w-32 h-full" href="/">
          <div>
            <Image src="/zestiot.svg" alt="logo" fill />
          </div>
        </Link>

        <div className="flex gap-1 ">
          <Link href="/">
            <button className=" h-9 bg-[#C8c8c8] px-5">What we do</button>
          </Link>

          <Link href="/">
            <button className=" h-9 bg-primary-100 text-white px-5">
              Get in touch
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
              <div className="flex items-center gap-1">
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
              <div className="flex items-center gap-1">
                {" "}
                <Icon icon="ep:arrow-right-bold" width="10" height="10" />
                Career
              </div>
              <div className="flex items-center gap-1">
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
              <div className="flex items-center gap-1">
                {" "}
                <Icon icon="ep:arrow-right-bold" width="10" height="10" /> Case
                Study
              </div>
              <div className="flex items-center gap-1">
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
              <div className="mt-2 flex items-center gap-1">
                <Icon icon="carbon:location-filled" width="15" height="15" />{" "}
                Address for India
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="carbon:location-filled" width="15" height="15" />{" "}
                Address for Netherland
              </div>
            </div>
          </section>
        </section>
        <section className="mt-10 w-full text-center">
          © 2021 ZestIOT, All rights reserved.
        </section>
      </footer>
    </>
  );
}

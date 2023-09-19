import React, { useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }, props) {
  return (
    <>
      <Head>
        <title>ZESTIOT</title>
        <meta property="og:title" content={`${props.title}`} key="title" />
      </Head>

      <nav className="h-14 w-full flex justify-between items-center bg-white px-4 py-2 shadow-md fixed top-0 z-10  ">
        <Link className=" relative w-20 h-full" href="/">
          <div>
            <Image src="/zestiot.svg" alt="logo" fill />
          </div>
        </Link>

        <div className="flex gap-1 ">
          <Link href="/">
            <button>What we do</button>
          </Link>
          <Link href="/">Demo</Link>
          <Link href="/">
            <button>Get in touch</button>
          </Link>
        </div>
      </nav>

      {children}
      <footer>sadsa</footer>
    </>
  );
}

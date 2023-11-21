"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from ".";

const Navbar = () => {
  const handleSignIn = () => {

  };

  return (
    <header className="w-full absolute z-10">
      <nav className="container flex justify-between items-center padding-y">
        <Link href={"/"} className="flex justify-center items-center">
          <Image 
            src="/logo.svg"
            className="object-contain"
            width={118}
            height={18}
            alt="Car Hub"
          />
        </Link>
        <Button 
          title="Sign In"
          type="button"
          styles="btn-white"
          handleClick={handleSignIn}
        />
      </nav>  
    </header>
  )
};

export default Navbar;
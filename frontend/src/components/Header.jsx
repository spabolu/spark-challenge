import Link from "next/link";
import Image from "next/image";

import logo from "@/public/IMG_1168.jpeg";

const Header = () => {
  return (
    <nav className="mx-auto flex h-16 w-full items-center justify-between px-2 font-bold md:px-20 bg-zinc-800">
      <Link
        href="/"
        className="flex items-center transition-all focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:space-x-0.5"
      >
        <Image
          src={logo}
          width={120}
          // height={200}
          alt="minedTALK logo"
          className="pb-2"
        />
        {/* <h1 className="text-xl text-white">minedTALK</h1> */}
      </Link>

      <div className="flex items-center space-x-2 md:space-x-4 ">
        <Link
          href="/"
          className="font-medium text-white transition-all focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Forum
        </Link>
        <Link
          href="/data"
          className="font-medium text-white transition-all focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Data
        </Link>

        <Link
          href="/about"
          className="font-medium text-white transition-all focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;

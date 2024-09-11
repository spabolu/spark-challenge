import Link from "next/link";

const Header = () => {
  return (
    <nav className="mx-auto flex h-16 w-full items-center justify-between px-2 font-bold md:px-20 bg-zinc-800">
      <Link
        href="/"
        className="flex items-center transition-all focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:space-x-0.5"
      >
        <h1 className="text-xl text-white">mineTALK</h1>
      </Link>

      <div className="flex items-center space-x-2 md:space-x-4 ">
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

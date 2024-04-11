import React from "react";
import Link from "next/link";
const NavbarComponent = () => {
  return (
    <main>
      <nav className="bg-transparent sticky top-0 left-0 w-full border-gray-200 dark:bg-gray-900 z-50">
        <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <Link href={"/"} className="flex items-center w-[140px] h-[60px]">
            <img
              src="https://imgs.search.brave.com/LLwA02lnSYKKijZITxoqrqH1Dp7efILp4UekclE0r7Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGVu/Z2FyZGVuLmNvbS5r/aC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wOS9MZWdlbmQt/Q2luZW1hLnBuZw"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2">
            <div
              className="items-center gap-9 hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    {/* <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    /> */}
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul className="flex flex-col gap-5   p-4 md:p-0 mt-4 text-lg font-normal border border-gray-100 rounded-lg  md:flex-row  md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="border-2 rounded-md text-white border-transparent px-8 py-1 transition-all duration-100 ease-in-out hover:text-black hover:border-red-400 hover:bg-white ">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="border-2 rounded-md text-white border-transparent px-8 py-1 transition-all duration-100 ease-in-out hover:text-black hover:border-red-400 hover:bg-white ">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Popular
                  </a>
                </li>
                <li className="border-2 rounded-md text-white border-transparent px-8 py-1 transition-all duration-100 ease-in-out hover:text-black hover:border-red-400 hover:bg-white ">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Romance
                  </a>
                </li>
                <li className="border-2 rounded-md text-white border-transparent px-8 py-1 transition-all duration-100 ease-in-out hover:text-black hover:border-red-400 hover:bg-white ">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Anime
                  </a>
                </li>
              </ul>
              <div className="relative hidden md:block">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type to search ........"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default NavbarComponent;

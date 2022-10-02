import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const menus = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Hours", url: "/hours" },
  { id: 3, name: "Menu", url: "/menu" },
  { id: 4, name: "Gallery", url: "/gallery" },
];
export default function Home() {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div className="none-flex md:flex relative ">
      <nav className="py-4 px-6 md:hidden relative">
        <div className="z-20">
          <svg
            onClick={() => setToggle(!toggle)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={`absolute bg-white w-full left-0 px-6 pt-5 ${
            toggle ? "visible opacity-1" : "invisible opacity-0"
          } duration-700`}
        >
          <ul className="">
            {menus?.map((m, i) => (
              <li className="border-b border-gray-400" key={m.id}>
                <Link href={m.url}>
                  <a
                    className={`uppercase py-2 rounded-md block ${
                      pathname === m.url ? "text-[#be9c79] " : "text-[#262626]"
                    } text-[12px] leading-[30px]`}
                  >
                    {m.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <aside className="bg-white md:w-[300px]  md:pt-16 md:px-6 flex items-center md:flex-col md:fixed md:inset-0 relative">
        <div className="flex justify-center absolute md:static -top-5">
          <img
            className="rounded-full w-[20%] md:w-2/5 "
            src="/assets/logo.jpeg"
            alt="logo"
          />
        </div>
        <div className="mt-10 w-full text-center hidden md:block">
          <ul>
            {menus?.map((m, i) => (
              <li key={m.id}>
                <Link href={m.url}>
                  <a
                    className={`uppercase px-12 py-1 rounded-md ${
                      pathname === m.url ? "text-[#be9c79] " : "text-[#262626]"
                    } text-[15px] leading-[30px]`}
                  >
                    {m.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="md:w-full ml-0 md:ml-[300px]">
        <div className=" w-full banner1 h-[300px] md:h-[500px] flex justify-center items-center">
          <div className="z-10 text-center">
            <h2 className="text-[70px] md:text-[100px] text-white uppercase tracking-[2.5px] font-semibold  banner_title">
              Kinda
            </h2>
            <h2 className="text-[32px] text-white  tracking-[2.5px] font-semibold italic">
              Izakaya
            </h2>
          </div>
        </div>
        <div className=" w-full banner2 flex justify-center py-28 md:py-20">
          <div>
            <p className="text-[20px] font-[500] text-white">
              1941A UNIVERSITY AVE
            </p>
            <p className="text-[20px] font-[500] text-white">
              BERKELEY, CA 94704
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

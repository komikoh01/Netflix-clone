"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { links } from "@/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MovieSelector from "./MovieSelector";

export function NavBarHome() {
  const url = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {url === "/" ? (
        <div className=" w-full relative p-0 m-0">
          <div className=" w-full h-[800px] z-10 ">
            <img
              src="/staticImages/Movie.jpg"
              alt="A film poster"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 z-15"></div>
          </div>

          <MaxWidthWrapper className=" absolute w-full top-0 left-0 flex justify-start py-2 px-12 z-20">
            <nav
              className={
                scrolled
                  ? " flex gap-10 py-2 px-12 justify-start items-center top-0 left-0 w-full backdrop-blur-md fixed"
                  : " flex gap-10 justify-center items-center fixed"
              }
            >
              <p className=" text-5xl font-bold text-red-700 tracking-wide drop-shadow-lg">
                <Link href="/">NETFLIX</Link>
              </p>
              <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                {links.map((link) => (
                  <Link href={`/${link.link}`} key={link.id}>
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
            <MovieSelector />
          </MaxWidthWrapper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default function Navbar() {
  const url = usePathname();

  return (
    <>
      {url !== "/" ? (
        <MaxWidthWrapper className=" flex justify-start py-2 px-12 relative">
          <nav className=" flex gap-10 justify-center items-center">
            <p className=" text-5xl font-bold text-red-700 tracking-wide ">
              <Link href="/">NETFLIX</Link>
            </p>
            <ul className=" font-semibold text-xl flex justify-center items-center gap-5">
              {links.map((link) => (
                <Link href={`/${link.link}`} key={link.id}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
        </MaxWidthWrapper>
      ) : (
        ""
      )}
    </>
  );
}

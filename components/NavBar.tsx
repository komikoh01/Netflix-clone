"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { links } from "@/data/data";
import { usePathname } from "next/navigation";

function NavBar() {
  const url = usePathname();
  console.log(typeof url);

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
          <MaxWidthWrapper className=" absolute w-full top-0 left-0 flex justify-start py-2 z-20">
            <nav className=" flex gap-10 justify-center items-center">
              <p className=" text-4xl font-bold text-red-700 tracking-wide drop-shadow-lg ">
                NETFLIX
              </p>
              <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                {links.map((link) => (
                  <Link href={`/${link.link}`} key={link.id}>
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </MaxWidthWrapper>
        </div>
      ) : (
        <MaxWidthWrapper className=" flex justify-start py-2 relative">
          <nav className=" flex gap-10 justify-center items-center bg-emerald-300">
            <p className=" text-4xl font-bold text-red-700 tracking-wide ">
              NETFLIX
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
      )}
    </>
  );
}

export default NavBar;

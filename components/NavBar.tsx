"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { links } from "@/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MovieSelector from "./MovieSelector";
import { AlertTriangle, Search, User } from "lucide-react";
import GenreSelect from "./GenreSelect";
import GenreBreadcrumb from "./GenreBreadcrumb";
import { BreadcrumbSeparator } from "./ui/breadcrumb";

interface GenreData {
  selectedGenre: string | null;
  isSelected: boolean;
}
export function NavBarHome() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<GenreData>({
    selectedGenre: null,
    isSelected: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGenreChange = (value: string) => {
    setSelectedGenre({ selectedGenre: value, isSelected: true });
  };

  const handleBradcrumbClick = () => {
    setSelectedGenre({ selectedGenre: null, isSelected: false });
  };

  const homeLinks = links.filter((link) => link.id !== 0);

  return (
    <>
      {pathname === "/" ? (
        <div className=" w-full relative p-0 m-0">
          <div className=" w-full h-[650px] z-10 ">
            <img
              src="/movies/TheNun2.jpg"
              alt="A film poster"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 z-15"></div>
          </div>

          <MaxWidthWrapper className=" absolute w-full top-0 left-0 flex justify-start py-2 px-12 ">
            <nav
              className={
                scrolled
                  ? " flex gap-10 py-2 px-12 justify-between items-center top-0 left-0 w-full backdrop-blur-md fixed z-30"
                  : " flex gap-10 justify-between items-center fixed py-2 px-12 top-0 left-0 w-full z-30"
              }
            >
              <div className=" flex gap-10 items-center">
                <p className=" text-5xl font-bold text-red-700 tracking-tighter drop-shadow-lg">
                  <Link href="/">NETFLIX</Link>
                </p>
                <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                  {homeLinks.map((link) => (
                    <Link href={`/${link.link}`} key={link.id}>
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </div>
              <div className=" flex gap-4">
                <Search className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <AlertTriangle className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <User className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
              </div>
            </nav>
            <div className=" pt-32">
              <MovieSelector />
            </div>
          </MaxWidthWrapper>
        </div>
      ) : pathname === "/Series" ? (
        <div className=" w-full relative p-0 m-0">
          <div className=" w-full h-[650px] z-10 ">
            <img
              src="/series/BreakingBad.jpg"
              alt="A film poster"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 z-15"></div>
          </div>

          <MaxWidthWrapper className=" absolute w-full top-0 left-0 flex flex-col justify-start py-2 px-12">
            <nav
              className={
                scrolled
                  ? " flex gap-10 py-2 px-12 justify-between items-center top-0 left-0 w-full backdrop-blur-md fixed z-30"
                  : " flex gap-10 justify-between items-center fixed py-2 px-12 top-0 left-0 w-full z-30"
              }
            >
              <div className=" flex gap-10 items-center">
                <p className=" text-5xl font-bold text-red-700 tracking-tighter drop-shadow-lg">
                  <Link href="/">NETFLIX</Link>
                </p>
                <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                  {links.map((link) => (
                    <div key={link.id} className=" flex flex-col items-center">
                      <Link href={`/${link.link}`}>{link.name}</Link>
                      {pathname === `/${link.link}` ? (
                        <div className=" bg-red-700/80 w-14 h-1" />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              <div className=" flex gap-4">
                <Search className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <AlertTriangle className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <User className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
              </div>
            </nav>
            <div className=" pt-20">
              <div className=" flex justify-start items-center gap-2">
                {selectedGenre.selectedGenre !== null ? (
                  <GenreBreadcrumb
                    movieType="Series"
                    selectedGenre={selectedGenre.selectedGenre}
                    onClick={handleBradcrumbClick}
                  />
                ) : (
                  <div className=" flex gap-2 justify-center items-center ">
                    <h2 className="text-white text-3xl font-semibold">
                      Series
                    </h2>
                    <BreadcrumbSeparator className=" flex justify-center items-center" />
                    <GenreSelect onValueChange={handleGenreChange} />
                  </div>
                )}
              </div>

              <MovieSelector />
            </div>
          </MaxWidthWrapper>
        </div>
      ) : pathname === "/Films" ? (
        <div className=" w-full relative p-0 m-0">
          <div className=" w-full h-[650px] z-10 ">
            <img
              src="/movies/Insidious-TheRedDoor.jpg"
              alt="A film poster"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 z-15"></div>
          </div>

          <MaxWidthWrapper className=" absolute w-full top-0 left-0 flex justify-start py-2 px-12">
            <nav
              className={
                scrolled
                  ? " flex gap-10 py-2 px-12 justify-between items-center top-0 left-0 w-full backdrop-blur-md fixed z-30"
                  : " flex gap-10 justify-between items-center fixed py-2 px-12 top-0 left-0 w-full z-30"
              }
            >
              <div className=" flex gap-10 items-center">
                <p className=" text-5xl font-bold text-red-700 tracking-tighter drop-shadow-lg">
                  <Link href="/">NETFLIX</Link>
                </p>
                <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                  {links.map((link) => (
                    <div key={link.id} className=" flex flex-col items-center">
                      <Link href={`/${link.link}`}>{link.name}</Link>
                      {pathname === `/${link.link}` ? (
                        <div className=" bg-red-700/80 w-14 h-1" />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              <div className=" flex gap-4">
                <Search className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <AlertTriangle className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
                <User className=" cursor-pointer hover:text-red-700/80 text-white w-7 h-7" />
              </div>
            </nav>
            <div className=" pt-20">
              <div className=" flex justify-start items-center gap-2">
                {selectedGenre.selectedGenre !== null ? (
                  <GenreBreadcrumb
                    movieType="Films"
                    selectedGenre={selectedGenre.selectedGenre}
                    onClick={handleBradcrumbClick}
                  />
                ) : (
                  <div className=" flex gap-2 justify-center items-center ">
                    <h2 className="text-white text-3xl font-semibold">
                      Films
                    </h2>
                    <BreadcrumbSeparator className=" flex justify-center items-center" />
                    <GenreSelect onValueChange={handleGenreChange} />
                  </div>
                )}
              </div>

              <MovieSelector />
            </div>
          </MaxWidthWrapper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const navPath =
    pathname !== "/" &&
    pathname !== "/Series" &&
    pathname !== "/Films" &&
    pathname !== "/RecentlyAdded";

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
      {navPath ? (
        <MaxWidthWrapper className=" flex justify-start py-2 px-12 relative">
          <nav
            className={
              scrolled
                ? " flex gap-10 py-2 px-12 justify-between items-center top-0 left-0 w-full backdrop-blur-md fixed"
                : " flex gap-10 justify-between items-center fixed py-2 px-12 top-0 left-0 w-full"
            }
          >
            <div className=" flex gap-10 items-center">
              <p className=" text-5xl font-bold text-red-700 tracking-tighter drop-shadow-lg">
                <Link href="/">NETFLIX</Link>
              </p>
              <ul className=" font-semibold text-xl flex justify-center items-center gap-5 drop-shadow-lg">
                {links.map((link) => (
                  <div key={link.id} className=" flex flex-col items-center">
                    <Link href={`/${link.link}`}>{link.name}</Link>
                    {pathname === `/${link.link}` ? (
                      <div className=" bg-red-700/80 w-14 h-1" />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </ul>
            </div>
            <div className=" flex gap-4">
              <Search className=" cursor-pointer hover:text-slate-400 text-white w-7 h-7" />
              <AlertTriangle className=" cursor-pointer hover:text-slate-400 text-white w-7 h-7" />
              <User className=" cursor-pointer hover:text-slate-400 text-white w-7 h-7" />
            </div>
          </nav>
        </MaxWidthWrapper>
      ) : (
        ""
      )}
    </>
  );
}

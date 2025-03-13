import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { links } from "@/data/data";

function NavBar() {
  return (
    <MaxWidthWrapper className=" flex justify-start py-2">
      <nav className=" flex gap-4 justify-center items-center">
          <p className=" text-4xl font-bold text-red-700 tracking-wide ">NETFLIX</p>
          <ul className=" font-semibold text-lg flex justify-center items-center gap-5">
            {links.map(
              (link) => (
                <Link href={`/${link.link}`} key={link.id}>
                  {link.name}
                </Link>
              )
            )}
          </ul>
      </nav>
    </MaxWidthWrapper>
  );
}

export default NavBar;

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Movie from "@/components/Movie";
import { NavBarHome } from "@/components/NavBar";

export default function Home() {
  return (
    <div className=" relative flex flex-col gap-6">
      <NavBarHome />
      <MaxWidthWrapper className="w-full flex flex-col gap-3 items-center justify-center py-4">
        <div className=" self-start pl-3">
          <p className=" text-lg font-bold ">Continue Watching</p>
        </div>
        <div className=" flex gap-5 items-center justify-center w-full">
          <Movie imgSrc="/series/LostInSpace.jpg" description="movie1" />
          <Movie imgSrc="/series/TheWitcher.jpg" description="movie2" />
          <Movie imgSrc="/series/Vikings.jpg" description="movie3" />
          <Movie imgSrc="/series/The100.jpg" description="movie4" />  
          <Movie imgSrc="/series/TheFlash.jpg" description="movie5" />
          <Movie imgSrc="/series/Titans.jpg" description="movie6" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

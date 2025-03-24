import { Info, Play } from "lucide-react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

function MovieInfo() {
  return (
    <section className=" w-1/2 h-full">
      <MaxWidthWrapper className="flex flex-col justify-start items-start gap-4 px-0">
        <h2 className=" text-6xl text-slate-200 font-semibold">Movie Title</h2>
        <p className=" text-base text-slate-300 text-pretty font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt cum
          officiis libero minima. Nisi impedit ipsam ullam temporibus adipisci,
          dolor modi aliquam sed nulla doloribus quo minima. Maxime, voluptas
          velit.
        </p>
        <div className=" flex flex-col gap-1">
          <div className=" flex gap-3">
            <Button className=" bg-slate-200 text-black rounded-xl hover:bg-red-700/70">
              <Play />
              <p>Play</p>
            </Button>

            <Button className=" bg-slate-800 text-white rounded-xl hover:bg-red-700/70">
              <Info />
              <p>More info</p>
            </Button>
          </div>
          <p className=" text-lg font-bold">Trending Now</p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default MovieInfo;

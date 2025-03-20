// import { useState } from "react";
// import { Title, Genre, Plot, Poster, Actors, imdbID } from "@/data/mock.json";
// import { Movie } from "@/app/types/types";
import MovieInfo from "./MovieInfo";

function MovieSelector() {
  // const [currentMovie, setCurrentMovie] = useState<Movie>({
  //   title: Title,
  //   genre: Genre,
  //   description: Plot,
  //   poster: Poster,
  //   actors: Actors,
  //   id: imdbID
  // });

  // const handleSelectedMovie = (id: string) => {
  //   setCurrentMovie({})
  // }

  return (
    <section className=" flex flex-col gap-4 justify-center items-start pt-52">
      <MovieInfo />
      <div className=" flex flex-wrap gap-5 items-start justify-start">
        <div className=" w-60 h-36 bg-rose-600">item1</div>
        <div className=" w-60 h-36 bg-cyan-600">item3</div>
        <div className=" w-60 h-36 bg-emerald-600">item4</div>
        <div className=" w-60 h-36 bg-violet-600">item5</div>
      </div>
    </section>
  );
}

export default MovieSelector;

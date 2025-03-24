// import { useState } from "react";
// import { Title, Genre, Plot, Poster, Actors, imdbID } from "@/data/mock.json";
// import { Movie } from "@/app/types/types";
import Movie from "./Movie";
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
    <section className=" relative w-full flex flex-col gap-4 justify-center items-start z-20">
      <MovieInfo />
      <div className=" w-full flex gap-3 items-center justify-center ">
        <Movie imgSrc="/series/TheLastOfUs.jpg" description="movie1"/>
        <Movie imgSrc="/series/TheBoys.jpg" description="movie2"/>
        <Movie imgSrc="/series/See.jpg" description="movie3"/>
        <Movie imgSrc="/series/Arrow.jpg" description="movie4"/>
        <Movie imgSrc="/series/Lucifer.jpg" description="movie5"/>
        <Movie imgSrc="/series/Gotham.jpg" description="movie6"/>
      </div>
    </section>
  );
}

export default MovieSelector;

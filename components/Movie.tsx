import { useState } from "react";
import { Title, Genre, Plot, Poster, Actors, imdbID } from "@/data/mock.json";
import { Movie } from "@/app/types/types";

function Movie() {
  const [currentMovie, setCurrentMovie] = useState<Movie>({
    title: Title,
    genre: Genre,
    description: Plot,
    poster: Poster,
    actors: Actors,
    id: imdbID
  });

  const handleSelectedMovie = (id: string) => {
    setCurrentMovie({})
  }

  return (
    <section>
      <div>{currentMovie.title}</div>
      <div></div>
    </section>
  );
}

export default Movie;

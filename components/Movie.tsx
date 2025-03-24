
import HeroVideoDialog from "./magicui/hero-video-dialog";

function Movie({
  imgSrc,
  description,
}: {
  imgSrc: string;
  description: string;
}) {

  return (
    <HeroVideoDialog
      thumbnailSrc={imgSrc}
      videoSrc=""
      thumbnailAlt={description}
    />
  );
}

export default Movie;

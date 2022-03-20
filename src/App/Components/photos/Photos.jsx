import serviSVG from "../../Asset/Services";
import PhotosView from "./PhotosView";

const PhotosJS = () => {

  const photos = [
    {
      img: serviSVG('uno'),
    },
    {
      img: serviSVG('dos'),
    },
    {
      img: serviSVG('tres'),
    },
    {
      img: serviSVG('cuatro'),
    },
    {
      img: serviSVG('cinco'),
    },
    {
      img: serviSVG('seis'),
    },
    {
      img: serviSVG('siete'),
    },
    {
      img: serviSVG('ocho'),

    },
    {
      img: serviSVG('nueve'),

    }
  ]

  return (
    <PhotosView photos={photos} />
  );
}

export default PhotosJS;
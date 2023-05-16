import ImageGallery from "react-image-gallery";
import dataImages from "../data/images.json";

import "react-image-gallery/styles/css/image-gallery.css";

export const GalleryComponent = () => {
  const images = dataImages.map((image) => {
    const imageP = image.original;

    function getImageUrl(name) {
      return new URL(`./dir/${name}.png`, import.meta.url).href;
    }

    const imgURL = getImageUrl(imageP);

    return {
      original: imgURL,
      thumbnail: imgURL,
      description: image.description,
    };
  });

  return (
    <>
      <hr />
      <h3>Hermoso apartamento, a estrenar:</h3>
      <ImageGallery items={images} />
    </>
  );
};

import ImageGallery from "react-image-gallery";
import dataImages from "../data/images.json";

import "react-image-gallery/styles/css/image-gallery.css";

export const GalleryComponent = () => {
  const images = dataImages.map((image) => {
    const imgURL = new URL(`${image.original}.jpeg`, import.meta.url).href;
    return {
      original: imgURL,
      thumbnail: `${image.thumbnail}.jpeg`,
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

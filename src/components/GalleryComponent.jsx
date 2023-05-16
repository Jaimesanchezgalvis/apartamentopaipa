import ImageGallery from "react-image-gallery";
import dataImages from "../data/images.json";

import "react-image-gallery/styles/css/image-gallery.css";

export const GalleryComponent = () => {
  const images = dataImages.map((image) => {
    return {
      original: `${image.original}.jpeg`,
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

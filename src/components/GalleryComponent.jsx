import ImageGallery from "react-image-gallery";
import dataImages from "../data/images.json";

import "react-image-gallery/styles/css/image-gallery.css";

const GalleryComponent = () => {
  const images = dataImages.map((image) => {
    return {
      original: image.original,
      thumbnail: image.thumbnail,
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

export default GalleryComponent;

const ImageGalleryItem = ({ src, alt }) => (
  <li className="gallery-item">
    <img src={src} alt={alt} />
  </li>
);

export default ImageGalleryItem;

import "./Gallery.scss";

const Gallery = (component) => {
  return (
    <div className="gallery">
      <div className="gallery__allItems">
        <div className="gallery__text">
          <h1 className="gallery__text--title">{component.props.title}</h1>
          <h2 className="gallery__text--subtitle">{component.props.subTitle}</h2>
        </div>
        <div className="gallery__images">
          <img
            className="gallery__images"
            src={component.props.about_imgs[0].path}
            alt={component.props.about_imgs[0].alt}
          />
          <img
            className="gallery__images"
            src={component.props.about_imgs[1].path}
            alt={component.props.about_imgs[1].alt}
          />
          <img
            className="gallery__images"
            src={component.props.about_imgs[2].path}
            alt={component.props.about_imgs[2].alt}
          />
          <img
            className="gallery__images"
            src={component.props.about_imgs[3].path}
            alt={component.props.about_imgs[3].alt}
          />
          <img
            className="gallery__images"
            src={component.props.about_imgs[4].path}
            alt={component.props.about_imgs[4].alt}
          />
          <img
            className="gallery__images"
            src={component.props.about_imgs[5].path}
            alt={component.props.about_imgs[5].alt}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
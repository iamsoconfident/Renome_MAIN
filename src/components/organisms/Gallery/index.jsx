import "./Gallery.scss";

const Gallery = (component) => {
  return (
    <div className="gallery">
      <div className="gallery__allItems">
        <div className="gallery__text">
          <h1 className="gallery__text--title">{component.props.title}</h1>
          <h2 className="gallery__text--subtitle">
            {component.props.subTitle}
          </h2>
        </div>
        <div className="gallery__images">
          {component.props.about_imgs.map((item, element) => (
            <div key={element}>
              <img className="gallery__images" 
              src={item.path} 
              alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;

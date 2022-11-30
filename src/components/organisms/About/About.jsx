import "./About.scss";

const About = (component) => {
  return (
    <div className="about">
      <div className="about-all-images">
        <img
          className="about__firstImage"
          src={component.props.about_imgs[0].path}
          alt={component.props.about_imgs[0].alt}
        />
        <img
          className="about__secondImage"
          src={component.props.about_imgs[1].path}
          alt={component.props.about_imgs[1].alt}
        />
      </div>
      <div className="about_text">
        <h1 className="title">{component.props.title}</h1>
        <h2 className="subtitle">{component.props.subTitle}</h2>
        <p className="about__text">{component.props.text}</p>
      </div>
    </div>
  );
};
export default About;

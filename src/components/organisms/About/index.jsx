import "./About.scss";

const About = (component) => {
  return (
    <div className="about">
      <div className="about__images--all">
        <img
          className="about__image--first"
          src={component.props.about_imgs[0].path}
          alt={component.props.about_imgs[0].alt}
        />
        <img
          className="about__image--second"
          src={component.props.about_imgs[1].path}
          alt={component.props.about_imgs[1].alt}
        />
      </div>
      <div className="about__text">
        <h1 className="about__text--title">{component.props.title}</h1>
        <h2 className="about__text--subtitle">{component.props.subTitle}</h2>
        <p>{component.props.text}</p>
      </div>
    </div>
  );
};
export default About;

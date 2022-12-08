import "./Footer.scss";

const Footer = (component) => {
  return (
    <footer>
      <div className="footer">
        <h1 className="footer__follow-us">{component.props.followUs}</h1>
        <div className="footer__socialmedia">
          <img
            className="footer__socialmedia--img"
            src={component.props.socialMedia[0].path}
            alt={component.props.socialMedia[0].alt}
          />
          <img
            className="footer__socialmedia--img"
            src={component.props.socialMedia[1].path}
            alt={component.props.socialMedia[1].alt}
          />
          <img
            className="footer__socialmedia--img"
            src={component.props.socialMedia[2].path}
            alt={component.props.socialMedia[2].alt}
          />
          </div>

        <p className="footer__renome">{component.props.title}</p>
        <p className="footer__copyright">{component.props.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;

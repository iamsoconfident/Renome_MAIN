import "./Footer.scss";

const Footer = (component) => {
  return (
    <footer>
      <div className="footer">
        <h1 className="footer__follow-us">{component.props.followUs}</h1>
        <div className="footer__socialmedia">
          {component.props.social_media?.map((item, element) => (
            <div key={element}>
              <img
                className="footer__socialmedia--img"
                src={item.path}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
        <p className="footer__renome">{component.props.title}</p>
        <p className="footer__copyright">{component.props.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;

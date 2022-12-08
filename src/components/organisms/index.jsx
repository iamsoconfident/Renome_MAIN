import About from "./About/index";
import Gallery from "./Gallery/index";
import Footer from "./Footer/index"

const Index = (props) => {
  return (
    <div className="index">
      <About props={props.data.about} />
      <Gallery props={props.data.gallery} />
      <Footer props={props.data.footer}/>
    </div>
  );
};
export default Index;

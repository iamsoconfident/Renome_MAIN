import About from "./About/index";
import Gallery from "./Gallery/index";
import Footer from "./Footer/index";
import Carousel from "./Carousel/index";
import Navigation from "./Navigation/index"

const Index = (props) => {
  return (
    <div className="index">    
      <Navigation 
       props={props.data.cartDropDown}
       />
      <Carousel props={props.data.carousel} />
      <About props={props.data.about} />
      <Gallery props={props.data.gallery} />
      <Footer props={props.data.footer}/>
    </div>
  );
};
export default Index;

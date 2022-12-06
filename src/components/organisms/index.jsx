import About from "./About/index";
import Gallery from "./Gallery/index";

const Index = (props) => {
  return (
    <div className="index">
      <About props={props.data.about} />
      <Gallery props={props.data.gallery} />
    </div>
  );
};
export default Index;

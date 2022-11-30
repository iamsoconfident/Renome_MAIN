import About from "./About/About";

const Index = (props) => {
  return (
    <div className="index">
      <About props={props.data.about} />
    </div>
  );
};

export default Index;

import "./Left_right.scss";
const Direction = ({ forward, back }) => {
  return (
    <div className="carousel__arrow">
      <button
        className="carousel__arrow--left"
        id="left-arrow"
        onClick={forward}
      >
        <img src="./svg_Icons/left-arrow.svg" alt="left arrow" />
      </button>

      <div className="carousel__space"></div>
      <button
        className="carousel__arrow--right"
        id="right-arrow"
        onClick={back}
      >
        <img src="./svg_Icons/right-arrow.svg" alt="right arrow" />
      </button>
    </div>
  );
};
export default Direction;

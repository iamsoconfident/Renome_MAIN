import Direction from "../../../Buttons/Left_right";
import "./Carousel.scss";
import React, { useState } from "react";

const Carousel = (component) => {
  const [carouselItems, assigncarouselItems] = 
  useState("carousel-element__carousel");
  const [slideDirection, assignSlideDirection] = 
  useState("carousel-element__carousel__mover");
  const [textItems, assigntextItems] = 
  useState("carousel-text-element__text-carousel");
  const [textSlideDirection, assignTextSlideDirection] = 
  useState("carousel-text-element__text-mover");
  const [direction, assignDirection] = 
  useState(-1);

  const slideShow = () => {
    if (direction == 1) {component.props.unshift(component.props.pop());} 
    else {component.props.push(component.props.shift());}

    assignSlideDirection("carousel-element__carousel__mover reset");
    assignTextSlideDirection("carousel-text-element__text-mover reset");
  };

  const forward = () => {
    if (direction == -1) {assignDirection(1); component.props.push(component.props.shift());}

    assigncarouselItems("carousel-element__carousel  assignBack");
    assignSlideDirection("carousel-element__carousel__mover slide__slide--Back");
    assigntextItems("carousel-text-element__text-carousel  assignBack");
    assignTextSlideDirection("carousel-text-element__text-mover slide__slide--Back");
  };

  const back = () => {
    if (direction == 1) { assignDirection(-1); component.props.unshift(component.props.pop());}

    assigncarouselItems("carousel-element__carousel  assignForward");
    assignSlideDirection("carousel-element__carousel__mover slide__slide--Forward");
    assigntextItems("carousel-text-element__text-carousel  assignForward");
    assignTextSlideDirection("carousel-text-element__text-mover slide__slide--Forward");
  };

  return (
    <div className="carousel-element">
      <div className={carouselItems}>
        <div className={slideDirection} onTransitionEnd={() => slideShow()}>
          {component.props.map((item, element) => (
            <section key={element}>
              <img src={item.path} 
              alt={item.alt} />
            </section>
          ))}

        </div>
        <div className="carousel-text-element">
          <div className={textItems}>
            <div className={textSlideDirection}>
              {component.props.map((item, element) => (
                <section key={element}>
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Direction forward={() =>  forward()} back={() => back()} />
    </div>
  );
};
export default Carousel;

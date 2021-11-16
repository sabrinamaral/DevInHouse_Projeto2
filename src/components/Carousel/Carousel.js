import React, { useContext } from "react";
import { gameContext } from "../../context/game.context";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledCarouselImg, StyledCarouselH3 } from "./Carousel.style";

export const SimpleSlider =() => {
  const { state } = useContext(gameContext);
  const { game } = state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <StyledCarouselH3>mais imagens...</StyledCarouselH3>
        <Slider {...settings}>
         {game && game.screenshots.map((screenshot) => (
            <StyledCarouselImg src={screenshot.image} alt={game&&game.title} key={game&&game.id}/>
          ))}
        </Slider>
      </div>
    );
  }

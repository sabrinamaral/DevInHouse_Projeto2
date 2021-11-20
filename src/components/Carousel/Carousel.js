import React, { useContext } from "react";
import { gameContext } from "../../context/game.context";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledCarouselImg, StyledCarouselP } from "./Carousel.style";

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
      <>
        <StyledCarouselP>mais imagens...</StyledCarouselP>
        <Slider {...settings}>
         {game && game.screenshots.map((screenshot) => (
            <StyledCarouselImg src={screenshot.image} alt={game.title} key={game.id}/>
          ))}
        </Slider>
      </>
   

    );
  }

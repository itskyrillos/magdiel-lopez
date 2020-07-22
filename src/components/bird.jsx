import React from "react";
import BirdImg from "../assets/images/5eba7bfbaca65d12954da2b1_bird.png";

const Bird = () => {
    return (
        <img
            className="layer birdImg"
            data-speed="4"
            src={BirdImg}
            alt="bird"
        />
    );
};

export default Bird;

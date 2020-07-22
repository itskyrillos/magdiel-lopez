import React from "react";
import AstronautImg from "../assets/images/5eba7be2d69d460c5ccaf8b1_cosmonaut2-2.png";

const Astronaut = () => {
    return (
        <img
            className="layer astronautImg"
            data-speed="2"
            src={AstronautImg}
            alt="cosmonaut"
        />
    );
};

export default Astronaut;

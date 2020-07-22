import React from "react";
import "./App.css";
import Title from "./components/title";
import Astronaut from "./components/astronaut";
import Bird from "./components/bird";
import Background from "./components/background";

const App = () => {
    return (
        <div className="App">
            <div className="title">
                <Title />
            </div>
            <div id="scene">
                <div className="astronaut">
                    <Astronaut />
                </div>
                <div className="bird">
                    <Bird />
                </div>
            </div>
            <div className="background">
                <Background />
            </div>
        </div>
    );
};

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
        let speed = layer.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 50;
        let y = (window.innerWidth - e.pageY * speed) / 50;
        layer.style.transform = `translateX(${x}px)
        translateY(${y}px)`;
    });
}

export default App;

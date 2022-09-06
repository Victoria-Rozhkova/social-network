import React from "react";
import module from "./HomePage.module.css";
import img from "./img/img.png";

export const HomePage = () => {
  return (
    <div>
      <h1 className={module.heading}>Welcome to Social Network</h1>
      <div className={module.homePage}>
        <img src={img} alt="img" />
      </div>
      <p className={module.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
        voluptatibus fugiat vero corporis delectus, quae hic eius aliquam!
        Architecto eos hic cumque aperiam cum perspiciatis eligendi molestiae
        ducimus velit labore?
      </p>
    </div>
  );
};

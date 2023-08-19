import React from "react";
import { HomeStyled } from "./Home.Styled";

const Home = () => {
  return (
    <HomeStyled className="home">
      <div className="home__header">
        <h1 className="title">Home</h1>
        <h2>navbar</h2>
      </div>
    </HomeStyled>
  );
};

export default Home;

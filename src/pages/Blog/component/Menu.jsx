import React, { useState } from "react";
import { MenuStyled } from "./Menu.Styled";

const Menu = ({ blogdata, setblogdata ,text,settext}) => {
    const sort = (event) => {
    let btnval = event.target.childNodes[0].data;
    settext(btnval);
  };
  return (
    <MenuStyled>
      <div className="menu">
        <button
          className={`item item__text ${text == "Barchasi" ? "active" : ""}`}
          onClick={sort}
        >
          Barchasi
        </button>
        <button
          className={`item item__text ${
            text == "Bitiruv marosimi" ? "active" : ""
          }`}
          onClick={sort}
        >
          Bitiruv marosimi
        </button>
        <button
          className={`item item__text ${
            text == "Master-klass" ? "active" : ""
          }`}
          onClick={sort}
        >
          Master-klass
        </button>
        <button
          className={`item item__text ${text == "Musobaqa" ? "active" : ""}`}
          onClick={sort}
        >
          Musobaqa
        </button>
        <button
          className={`item item__text ${text == "Dasturlash" ? "active" : ""}`}
          onClick={sort}
        >
          Dasturlash
        </button>
        <button
          className={`item item__text ${text == "Najot Quiz" ? "active" : ""}`}
          onClick={sort}
        >
          Najot Quiz
        </button>
      </div>
    </MenuStyled>
  );
};

export default Menu;

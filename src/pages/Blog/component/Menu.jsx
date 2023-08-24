import React from "react";
import { MenuStyled } from "./Menu.Styled";

const Menu = ({ blogdata, setblogdata, Text }) => {
  function sort(text) {
    for (let i = 0; i < blogdata.length; i++) {
      if (blogdata[i].blogtitle == text) {
        console.log(blogdata[i]);
        setblogdata(blogdata[i]);
      } else if (blogdata[i].blogtitle == "Barchasi") {
        setblogdata(blogdata);
      }
    }
  }
  return (
    <MenuStyled>
      <button className="item" onClick={() => sort(Text)}>
        <p className="item__text">{Text}</p>
      </button>
    </MenuStyled>
  );
};

export default Menu;

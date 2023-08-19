import React from "react";
import { MenuStyled } from "./Menu.Styled";

const Menu = ({Text}) => {
  return (
    <MenuStyled>
        <div className="item">
          <p className="item__text">{Text}</p>
        </div>
    </MenuStyled>
  );
};

export default Menu;

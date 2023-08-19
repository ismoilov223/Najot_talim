import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import arrow from "./img/arrow.svg";
const CurseHeader = () => {
  return (
    <HeaderStyle className="header">
      <div className="header__h3">
        <h3 className="header__boshs">Bosh sahifa</h3>
        <h3>Kurslar</h3>
      </div>
    </HeaderStyle>
  );
};

export default CurseHeader;

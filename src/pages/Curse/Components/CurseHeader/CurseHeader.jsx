import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { lupa } from "../../../../images";

const CurseHeader = () => {
  return (
    <HeaderStyle className="header">
      <div className="container">
        <div className="header__h3">
          <h3 className="header__boshs">Bosh sahifa</h3>
          <h3 className="header__kurs">Kurslar</h3>
        </div>
        <div className="">
          <h1>Barcha o‘quv kurslari</h1>
          <form className="header__form">
            <input className="header__input" type="text" placeholder="Izlash" />
            <img className="header__lupa" src={lupa} alt="" />
          </form>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default CurseHeader;

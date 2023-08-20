import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { lupa } from "../../../../images";
import ButtonsCourse from "../buttons/ButtonsCourse";

const CurseHeader = () => {
  return (
    <HeaderStyle className="header">
      <div className="header__bg">
        <div className="container">
          <div className="header__h3">
            <h3 className="header__boshs">Bosh sahifa</h3>
            <h3 className="header__kurs">Kurslar</h3>
          </div>
          <div className="header__serach">
            <h1>Barcha o‘quv kurslari</h1>
            <form className="header__form">
              <input
                className="header__input"
                type="text"
                placeholder="Izlash"
              />
              <img className="header__lupa" src={lupa} alt="" />
            </form>
          </div>
          <div className="header__button">
            <ButtonsCourse></ButtonsCourse>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default CurseHeader;

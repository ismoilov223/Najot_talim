import React from "react";
import { CurseStyle } from "./CurseStyle";
import CurseHeader from "./Components/CurseHeader/CurseHeader";
import CartCours from "./Components/CartCours/CartCours";

const CursePage = () => {
  return (
    <CurseStyle>
      <CurseHeader></CurseHeader>
      <CartCours></CartCours>
    </CurseStyle>
  );
};

export default CursePage;

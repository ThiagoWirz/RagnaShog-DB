import * as style from "./style";
import logo from "../../assets/images/logo.webp";
import React from "react";

export default function Header() {
  return (
    <style.Container>
      <style.Logo to="/">
        <img src={logo} alt="logo" />
      </style.Logo>
    </style.Container>
  );
}

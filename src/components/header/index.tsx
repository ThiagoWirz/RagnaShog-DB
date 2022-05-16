import * as style from "./style";
import logo from "../../assets/images/logo.webp";

export default function Header() {
  return (
    <style.Container>
      <style.Logo to="/">
        <img src={logo} alt="logo" />
      </style.Logo>
    </style.Container>
  );
}

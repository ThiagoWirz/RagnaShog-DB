import * as style from "./style";
import monsterBanner from "../../assets/images/Monster_banner.jpg";
import mapBanner from "../../assets/images/World_map.jpg";
import itemBanner from "../../assets/images/Item_banner.jpg";
import welcomeImg from "../../assets/images/welcome.png";
import React from "react";

export default function LandingPage() {
  return (
    <style.Container>
      <style.Welcome>
        <img src={welcomeImg} alt="welcome" />
        <h1>Bem Vindo</h1>
      </style.Welcome>
      <style.BannerContainer>
        <style.Banner to="/maps">
          <img src={mapBanner} alt="map" />

          <h1>Mapa</h1>
        </style.Banner>
        <style.Banner to="/monsters">
          <img src={monsterBanner} alt="mosnters" />

          <h1>Monstros</h1>
        </style.Banner>
        <style.Banner to="/itens">
          <img src={itemBanner} alt="itens" />

          <h1>Itens</h1>
        </style.Banner>
      </style.BannerContainer>
    </style.Container>
  );
}

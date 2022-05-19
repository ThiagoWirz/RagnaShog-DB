import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropertyProps {
  property?: string;
  position?: number;
}

export const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonsterContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  h1 {
    color: #fff;
  }
`;

export const MonsterGif = styled.div`
  height: auto;
  width: auto;
`;

export const MonsterInfo = styled.div`
  display: flex;
  width: 100%;
`;

export const PropertyTable = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 12px;
`;

export const PropertyBox = styled.div`
  display: flex;
  height: 10%;
`;

export const PropertyName = styled.div<PropertyProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #aaaaaa;
  border-top: ${(props) => props.position !== 0 && "1px solid #aaaaaa"};
`;

export const PropertyBonus = styled.div<PropertyProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.property === "Água"
      ? "#7ba7e1"
      : props.property === "Sagrado"
      ? "#ffffaa"
      : props.property === "Terra"
      ? "#daaf85"
      : props.property === "Maldito"
      ? "#000"
      : props.property === "Neutro"
      ? "#fff"
      : props.property === "Fogo"
      ? "#ff7575"
      : props.property === "Fantasma"
      ? "#aaaaaa"
      : props.property === "Veneno"
      ? "#4bfe78"
      : props.property === "Sombrio"
      ? "#a55feb"
      : props.property === "Vento"
      ? "#cafeb8"
      : props.property === "" && "#fff"};
  color: ${(props) =>
    props.property === "Água"
      ? "#fff"
      : props.property === "Sagrado"
      ? "#000"
      : props.property === "Terra"
      ? "#000"
      : props.property === "Maldito"
      ? "#fff"
      : props.property === "Neutro"
      ? "#000"
      : props.property === "Fogo"
      ? "#fff"
      : props.property === "Fantasma"
      ? "#000"
      : props.property === "Veneno"
      ? "#000"
      : props.property === "Sombrio"
      ? "#fff"
      : props.property === "Vento" && "#000"};

  border-top-right-radius: ${(props) => props.position === 0 && "12px"};
  border-bottom-right-radius: ${(props) => props.position === 9 && "12px"};
`;

export const Button = styled.button`
  all: unset;
  height: 30px;
  background-color: #00f;
  color: #fff;
  margin: 5px;
  padding: 5px;
  border-radius: 12px;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 3%;
  width: 100%;
`;

export const ItemAndMap = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemBox = styled.div`
  display: flex;
  width: 100%;
`;

export const SpriteAndName = styled.div`
  display: flex;
  width: 25%;
`;

export const ItemSprite = styled.img`
  display: flex;
`;

export const ItemName = styled(Link)`
  display: flex;
`;

export const ItemCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const ItemPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const ItemChance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const MapBox = styled.div<PropertyProps>`
  display: flex;
  border-bottom: ${(props) => props.position === 0 && "1px solid #aaaaaa"};
  border-top: ${(props) =>
    props.position !== 0 && props.position !== 1 && "1px solid #aaaaaa"};
`;
export const MapImg = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapName = styled(Link)`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
`;

export const MapQty = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

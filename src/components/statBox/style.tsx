import styled from "styled-components";

interface PropertyProps {
  property: string;
  position?: string;
}

interface CheckProps {
  check?: boolean;
}

interface BorderProps {
  position?: string;
}

export const StatBox = styled.div`
  margin-left: 50px;
  background-color: #aaaaaa;
  border-radius: 12px;
  width: 30%;
`;

export const Stat = styled.div<PropertyProps>`
  display: flex;
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

  border-top-right-radius: ${(props) => props.position === "0" && "12px"};
  border-bottom-right-radius: ${(props) => props.position === "2" && "12px"};
  border-top: ${(props) => props.position === "1" && "1px solid #aaaaaa"};
  border-top: ${(props) => props.position === "2" && "1px solid #aaaaaa"};
  font-size: 20px;
  height: 5%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StatTitle = styled.div`
  width: 50%;
  color: #000;
  background-color: #fff;
  border-right: 1px solid #aaaaaa;
`;

export const SecondaryStat = styled.div<BorderProps>`
  display: flex;
  width: 100%;
  height: 11%;
  background-color: #fff;
  border-top-left-radius: ${(props) => props.position === "1" && "12px"};
  border-top-right-radius: ${(props) => props.position === "1" && "12px"};
  border-bottom-left-radius: ${(props) => props.position === "2" && "12px"};
  border-bottom-right-radius: ${(props) => props.position === "2" && "12px"};
  border-top: ${(props) => props.position !== "1" && "1px solid #aaaaaa"};
`;

export const SecondaryStatName = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #aaaaaa;
`;

export const SecondaryStatValue = styled.div<CheckProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.check ? "#0F0" : "#F00")};
`;

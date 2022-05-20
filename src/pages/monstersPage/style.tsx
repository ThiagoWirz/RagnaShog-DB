import styled from "styled-components";

interface MonsterProps {
  index: number;
  route?: string;
}

interface PageProps {
  isFirstPage: boolean;
}

interface RouteProps {
  route?: string;
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

export const SearchOptions = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 15px;
`;

export const searchedContainer = styled.div`
  height: 700px;
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
`;

export const Monster = styled.div<MonsterProps>`
  display: flex;
  height: ${(props) => (props.route ? "auto" : "10%")};
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #888888;
  border-top-left-radius: ${(props) => props.index === 0 && "12px"};
  border-top-right-radius: ${(props) => props.index === 0 && "12px"};
  border-bottom-left-radius: ${(props) => props.index === 9 && "12px"};
  border-bottom-right-radius: ${(props) => props.index === 8 && "12px"};
`;

export const MonsterImg = styled.div<RouteProps>`
  width: ${(props) => (props.route === "map" ? "16%" : "20%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #888888;
  img {
    :hover {
      cursor: pointer;
    }
  }
`;

export const MonsterName = styled.div<RouteProps>`
  height: 100%;
  width: ${(props) => (props.route === "map" ? "16%" : "20%")};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const MonsterProperty = styled.div<RouteProps>`
  width: ${(props) => (props.route === "map" ? "16%" : "20%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-right: 1px solid #888888;
  border-left: 1px solid #888888;
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
      : props.property === "Vento" && "#cafeb8"};
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
`;

export const MonsterRace = styled.div<RouteProps>`
  width: ${(props) => (props.route === "map" ? "16%" : "20%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-right: 1px solid #888888;
`;

export const MonsterSize = styled.div<RouteProps>`
  height: 100%;
  width: ${(props) => (props.route === "map" ? "16%" : "20%")};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const PageCounter = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 15%;
  background-color: #fff;
  display: flex;
  border-radius: 12px;
`;

export const CurrentPage = styled.div<PageProps>`
  background-color: #aaa;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${(props) => props.isFirstPage && "12px"};
  border-bottom-left-radius: ${(props) => props.isFirstPage && "12px"};
`;

export const OtherPage = styled.button`
  all: unset;
  height: inherit;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

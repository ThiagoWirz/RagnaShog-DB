import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Welcome = styled.div`
  padding-top: 20px;
  height: 200px;

  img {
    height: 100px;
  }
  h1 {
    color: white;
    font-size: 30px;
  }
`;

export const BannerContainer = styled.div`
  height: 700px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Banner = styled(Link)`
  height: 175px;
  width: 100%;
  position: relative;
  img {
    height: 175px;
    width: 100%;
  }
  h1 {
    margin: 0;
    position: absolute;
    bottom: 0;
    right: 10px;
    color: #fff;
  }
`;

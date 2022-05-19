import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #777777;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled(Link)`
  width: 45px;
  height: 45px;
  margin-left: 30px;
  img {
    width: 45px;
    height: 45px;
  }
`;

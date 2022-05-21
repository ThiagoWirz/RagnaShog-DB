import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapImg = styled.div`
  padding-top: 30px;
  width: 50%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MonsterContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
`;

export const MonsterQty = styled.div`
  width: 16%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-left: 1px solid #888888;
`;

export const BordersMap = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 10px;
  min-width: 100%;
`;

export const MapDisplay = styled.div``;

export const MapName = styled.div``;

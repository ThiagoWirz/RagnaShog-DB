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

export const ItemContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
`;

export const ItemName = styled.div`
  color: #fff;
  font-size: 25px;
  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const ItemDisplay = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const ItemImg = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;

export const ItemDescription = styled.div``;

export const MonsterContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: #888888;
  border: 1px solid #666666;
  border-radius: 12px;
`;

export const Monster = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #aaaaaa;
`;

export const MonsterSprite = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MonsterName = styled.div`
  width: 33%;
  border-left: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MonsterChance = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EffectSpan = styled.span`
  color: blue;
`;

export const DescriptionSpan = styled.span`
  color: #999999;
`;

import styled from "styled-components";

interface ItemProps {
  index: number;
}

interface PageProps {
  isFirstPage: boolean;
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

export const Item = styled.div<ItemProps>`
  display: flex;
  height: 5%;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #888888;
  border-top-left-radius: ${(props) => props.index === 0 && "12px"};
  border-top-right-radius: ${(props) => props.index === 0 && "12px"};
  border-bottom-left-radius: ${(props) => props.index === 19 && "12px"};
  border-bottom-right-radius: ${(props) => props.index === 19 && "12px"};
`;

export const ItemSprite = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-right: 1px solid #888888;
  img {
    :hover {
      cursor: pointer;
    }
  }
`;

export const ItemCategory = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-right: 1px solid #888888;
`;

export const ItemPrice = styled.div`
  width: 33.33%;
  height: 100%;
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

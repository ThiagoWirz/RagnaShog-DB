import { useEffect, useState } from "react";
import * as style from "./style";
import * as api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function MonsterPage() {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      const { data: monstersData } = await api.getMonster(pageNumber);
      setMonsters(monstersData);
    }
    loadPage();
  }, [pageNumber]);

  return (
    <style.Container>
      <style.searchedContainer>
        {monsters.length !== 0 && (
          <>
            {monsters.map((monster, i) => (
              <style.Monster key={i} index={i}>
                <style.MonsterImg>
                  <img
                    onClick={() => {
                      navigate(`/monsters/${monster.id}`);
                    }}
                    src={monster.spriteUrl}
                    alt={monster.name}
                  />
                </style.MonsterImg>
                <style.MonsterName>
                  <Link to={`/monsters/${monster.id}`}>{monster.name}</Link>
                </style.MonsterName>
                <style.MonsterProperty property={monster.stats.property.name}>
                  <span>
                    {monster.stats.property.name} {monster.stats.property.level}
                  </span>
                </style.MonsterProperty>
                <style.MonsterRace>{monster.stats.race.name}</style.MonsterRace>
                <style.MonsterSize>{monster.stats.size.name}</style.MonsterSize>
              </style.Monster>
            ))}
          </>
        )}
      </style.searchedContainer>
      {pageNumber === 1 ? (
        <style.PageCounter>
          <style.CurrentPage isFirstPage={true}>{pageNumber}</style.CurrentPage>
          <style.OtherPage
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            {pageNumber + 1}
          </style.OtherPage>
        </style.PageCounter>
      ) : (
        <style.PageCounter>
          <style.OtherPage
            onClick={() => {
              setPageNumber(pageNumber - 1);
            }}
          >
            {pageNumber - 1}
          </style.OtherPage>
          <style.CurrentPage isFirstPage>{pageNumber}</style.CurrentPage>
          <style.OtherPage
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            {" "}
            {pageNumber + 1}{" "}
          </style.OtherPage>
        </style.PageCounter>
      )}
    </style.Container>
  );
}

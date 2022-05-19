import React, { useEffect, useState } from "react";
import * as style from "./style";
import * as api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

export default function MonstersPage() {
  const [monsters, setMonsters] = useState<api.Monster[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchRace, setSearchRace] = useState<string>("");
  const [searchProperty, setSearchProperty] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      const { data: monstersData } = await api.getMonster(
        pageNumber,
        searchRace,
        searchProperty
      );
      setMonsters(monstersData);
    }
    loadPage();
  }, [pageNumber, searchRace, searchProperty]);

  return (
    <style.Container>
      <style.SearchOptions>
        <Autocomplete
          disablePortal
          options={[
            "Amorfo",
            "Anjo",
            "Bruto",
            "Dêmonio",
            "Dragão",
            "Humanoide",
            "Inseto",
            "Morto-Vivo",
            "Peixe",
            "Planta",
          ]}
          sx={{ marginX: "auto", backgroundColor: "#fff" }}
          isOptionEqualToValue={(option: string, value: string) =>
            option === value
          }
          onInputChange={(e, value) => setSearchRace(value)}
          renderInput={(params: any) => (
            <TextField
              {...params}
              sx={{ marginX: "auto", width: "450px" }}
              label="Races"
            />
          )}
        />
        <Autocomplete
          disablePortal
          options={[
            "Água",
            "Fantasma",
            "Fogo",
            "Maldito",
            "Neutro",
            "Sagrado",
            "Sombrio",
            "Terra",
            "Veneno",
            "Vento",
          ]}
          sx={{ marginX: "auto", backgroundColor: "#fff" }}
          isOptionEqualToValue={(option: string, value: string) =>
            option === value
          }
          onInputChange={(e, value) => setSearchProperty(value)}
          renderInput={(params: any) => (
            <TextField
              {...params}
              sx={{ marginX: "auto", width: "450px" }}
              label="Properties"
            />
          )}
        />
      </style.SearchOptions>

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
          <style.CurrentPage isFirstPage={false}>
            {pageNumber}
          </style.CurrentPage>
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

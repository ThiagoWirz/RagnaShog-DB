import React, { useEffect, useState } from "react";
import * as style from "./style";
import * as api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

export default function MapsPage() {
  const [maps, SetMaps] = useState<api.Map[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchRegion, setSearchRegion] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      const { data: mapsData } = await api.getMaps(pageNumber, searchRegion);

      SetMaps(mapsData);
    }
    loadPage();
  }, [pageNumber, searchRegion]);

  return (
    <style.Container>
      <style.SearchOptions>
        <Autocomplete
          disablePortal
          options={[
            "Prontera",
            "Geffen",
            "Morroc",
            "Payon",
            "Alberta",
            "Izlude",
            "Al De Baram",
            "Comodo",
            "Umbala",
            "Lutie",
          ]}
          sx={{ marginX: "auto", backgroundColor: "#fff" }}
          isOptionEqualToValue={(option: string, value: string) =>
            option === value
          }
          onInputChange={(e, value) => setSearchRegion(value)}
          renderInput={(params: any) => (
            <TextField
              {...params}
              sx={{ marginX: "auto", width: "450px" }}
              label="Regions"
            />
          )}
        />
      </style.SearchOptions>
      <style.searchedContainer>
        {maps.length !== 0 && (
          <>
            {maps.map((map: api.Map, i: number) => (
              <style.Map key={i} index={i}>
                <style.MapImg>
                  <img
                    onClick={() => {
                      navigate(`/maps/${map.id}`);
                    }}
                    src={map.imageUrl}
                    alt={map.name}
                  />
                </style.MapImg>

                <style.MapName>
                  <Link to={`/maps/${map.id}`}>{map.name}</Link>
                </style.MapName>
                <style.MapMonsters>
                  {map.mapMonster.length === 0 ? (
                    <>Cidade</>
                  ) : (
                    map.mapMonster.map((monster: api.MapMonster) => (
                      <p>
                        {monster.qty}{" "}
                        <Link to={`/monsters/${monster.monsterId}`}>
                          {monster.monster.name}
                        </Link>
                      </p>
                    ))
                  )}
                </style.MapMonsters>
              </style.Map>
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

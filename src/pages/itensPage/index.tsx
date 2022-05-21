import React, { useEffect, useState } from "react";
import * as style from "./style";
import * as api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

export default function ItensPage() {
  const [itens, setItens] = useState<api.Item[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchCategory, setSearchCategory] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPage() {
      const { data: itensData } = await api.getItens(
        pageNumber,
        searchCategory
      );
      setItens(itensData);
    }
    loadPage();
  }, [pageNumber, searchCategory]);

  return (
    <style.Container>
      <style.SearchOptions>
        <Autocomplete
          disablePortal
          options={["Etc.", "Consumível", "Equipamento", "Carta"]}
          sx={{ marginX: "auto", backgroundColor: "#fff" }}
          isOptionEqualToValue={(option: string, value: string) =>
            option === value
          }
          onInputChange={(e, value) => setSearchCategory(value)}
          renderInput={(params: any) => (
            <TextField
              {...params}
              sx={{ marginX: "auto", width: "450px" }}
              label="Categories"
            />
          )}
        />
      </style.SearchOptions>

      <style.searchedContainer>
        {itens.length !== 0 && (
          <>
            {itens.map((item: api.Item, i: number) => (
              <style.Item key={i} index={i}>
                <style.ItemSprite>
                  <img
                    onClick={() => {
                      navigate(`/itens/${item.id}`);
                    }}
                    src={item.spriteUrl}
                    alt={item.name}
                  />
                  <Link to={`/itens/${item.id}`}>
                    {item.name} {item.slot && `[${item.slot}]`}
                  </Link>
                </style.ItemSprite>

                <style.ItemCategory>{item.category}</style.ItemCategory>
                <style.ItemPrice>{item.price}z</style.ItemPrice>
              </style.Item>
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

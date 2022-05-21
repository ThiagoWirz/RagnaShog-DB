import React, { useEffect, useState } from "react";
import * as api from "../../services/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as style from "./style";

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState<api.Item>();
  const classString = item?.reqClass.join("/ ");

  console.log(item);

  useEffect(() => {
    async function fetchItemData() {
      if (!id) return;

      const { data: itemData } = await api.getItemById(parseInt(id));
      setItem(itemData);
    }
    fetchItemData();
  }, [id]);

  return (
    <style.Container>
      <style.ItemContainer>
        <style.ItemName>
          <img src={item?.spriteUrl} alt={item?.name} />
          {item?.name} {item?.slot && `[${item.slot}]`}
        </style.ItemName>
        <style.ItemDisplay>
          <style.ItemImg>
            <img src={item?.imageUrl} alt={item?.name}></img>
          </style.ItemImg>
          <style.ItemDescription>
            {item?.category === "Etc." && (
              <>
                <br />
                {item?.description}
                <br />
                <br />
                <br /> Peso:
                <style.DescriptionSpan> {item.weight}</style.DescriptionSpan>
              </>
            )}
            {item?.category === "Consumível" && (
              <>
                <br />
                {item.description}
                <br />
                <style.EffectSpan>{item.effects}</style.EffectSpan>
                <br />
                Peso:
                <style.DescriptionSpan> {item.weight}</style.DescriptionSpan>
              </>
            )}
            {item?.isEquip && (
              <>
                <br />
                {item.description}
                <br />
                Tipo:
                <style.DescriptionSpan> {item.category}</style.DescriptionSpan>
                <br />
                {item.attack && (
                  <>
                    Ataque:{" "}
                    <style.DescriptionSpan>
                      {" "}
                      {item.attack}
                    </style.DescriptionSpan>
                    <br />
                  </>
                )}
                {item.defense && (
                  <>
                    Defesa:{" "}
                    <style.DescriptionSpan>
                      {" "}
                      {item.defense}
                    </style.DescriptionSpan>{" "}
                    <br />
                  </>
                )}
                Peso:{" "}
                <style.DescriptionSpan> {item.weight} </style.DescriptionSpan>{" "}
                <br />
                {item.level && (
                  <>
                    Nivel da arma:{" "}
                    <style.DescriptionSpan>{item.level}</style.DescriptionSpan>{" "}
                    <br />
                  </>
                )}
                {item.reqLevel !== null && (
                  <>
                    {" "}
                    Nivel Necessário:{" "}
                    <style.DescriptionSpan>
                      {item.reqLevel}
                    </style.DescriptionSpan>{" "}
                    <br />
                  </>
                )}
                {item.reqClass.length !== 0 && (
                  <>
                    Classes que Utilizam:{" "}
                    <style.DescriptionSpan>{classString}</style.DescriptionSpan>
                  </>
                )}
              </>
            )}

            {item?.category === "Carta" && (
              <>
                <style.EffectSpan>{item.effects}</style.EffectSpan>
                <br />
                {item.description}
                <br />
                Classe:{" "}
                <style.DescriptionSpan>{item.category}</style.DescriptionSpan>
                <br />
                Equipa em:{" "}
                <style.DescriptionSpan>{item.position}</style.DescriptionSpan>
                <br />
                Peso:{" "}
                <style.DescriptionSpan>{item.weight}</style.DescriptionSpan>
              </>
            )}
          </style.ItemDescription>
          {item?.category === "Carta" && (
            <img src={item.cardImageUrl} alt={item.name}></img>
          )}
        </style.ItemDisplay>
      </style.ItemContainer>
      {item?.itemMonster.length !== 0 && (
        <style.MonsterContainer>
          {item?.itemMonster.map((monster: api.ItemMonster, i: number) => (
            <style.Monster key={i}>
              <style.MonsterSprite>
                <img
                  src={monster.monster.spriteUrl}
                  alt={monster.monster.name}
                />
              </style.MonsterSprite>
              <style.MonsterName>
                <Link to={`/monsters/${monster.monsterId}`}>
                  {monster.monster.name}
                </Link>
              </style.MonsterName>
              <style.MonsterChance>{monster.dropRate}%</style.MonsterChance>
            </style.Monster>
          ))}
        </style.MonsterContainer>
      )}
    </style.Container>
  );
}

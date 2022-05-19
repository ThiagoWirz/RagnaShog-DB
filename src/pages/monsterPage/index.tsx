import React, { useEffect, useState } from "react";
import * as api from "../../services/api";
import { useParams } from "react-router-dom";
import * as style from "./style";
import StatBox from "../../components/statBox/index";

export default function MonsterPage() {
  const { id } = useParams();
  const [monster, setMonster] = useState<api.Monster>();
  const [propertyTable, setPropertyTable] = useState<api.PropertiesBonus[]>([]);
  const [display, setDisplay] = useState<string>("main");
  const [ItemOrMap, setItemOrMap] = useState<string>("map");

  useEffect(() => {
    async function fetchMonsterData() {
      if (!id) return;

      const { data } = await api.getMonsterById(parseInt(id));
      setMonster(data.monster);
      setPropertyTable(data.propertiesTable);
    }
    fetchMonsterData();
  }, [id]);

  return (
    <style.Container>
      {monster && (
        <style.MonsterContainer>
          <h1>{monster.name} </h1>
          <style.MonsterGif>
            <img src={monster.spriteUrl} alt={monster.name} />
          </style.MonsterGif>
          <style.ButtonBox>
            <style.Button
              onClick={() => {
                if (display === "main") setDisplay("secondary");
                else setDisplay("main");
              }}
            >
              Change Stats Display
            </style.Button>
            <style.Button
              onClick={() => {
                if (ItemOrMap === "item") setItemOrMap("map");
                else setItemOrMap("item");
              }}
            >
              Change Item and Map
            </style.Button>
          </style.ButtonBox>

          <style.MonsterInfo>
            <style.InfoBox>
              <StatBox stats={monster.stats} displayInfo={display} />
              <style.PropertyTable>
                {propertyTable.length !== 0 &&
                  propertyTable.map((property: any, i: number) => (
                    <style.PropertyBox key={i}>
                      <style.PropertyName position={i}>
                        {property.atkProperty.name}
                      </style.PropertyName>
                      <style.PropertyBonus
                        position={i}
                        property={property.atkProperty.name}
                      >
                        {property.bonus}%
                      </style.PropertyBonus>
                    </style.PropertyBox>
                  ))}
              </style.PropertyTable>
              <style.ItemAndMap>
                {ItemOrMap === "item"
                  ? monster.itemMonster.length !== 0 &&
                    monster.itemMonster.map(
                      (item: api.ItemMonster, i: number) => (
                        <style.ItemBox key={i}>
                          <style.SpriteAndName>
                            <style.ItemSprite
                              src={item.item.spriteUrl}
                            ></style.ItemSprite>
                            <style.ItemName to={`/itens/${item.itemId}`}>
                              {item.item.name}{" "}
                              {item.item.slot && `[${item.item.slot}]`}
                            </style.ItemName>
                          </style.SpriteAndName>
                          <style.ItemCategory>
                            {item.item.category}
                          </style.ItemCategory>
                          <style.ItemPrice>{item.item.price}z</style.ItemPrice>
                          <style.ItemChance>{item.dropRate}%</style.ItemChance>
                        </style.ItemBox>
                      )
                    )
                  : monster.mapMonster.length !== 0 &&
                    monster.mapMonster.map((map: api.MapMonster, i: number) => (
                      <style.MapBox key={i} position={i}>
                        <style.MapImg>
                          <img src={map.map.imageUrl} alt={map.map.name} />
                        </style.MapImg>
                        <style.MapName to={`/maps/${map.map.id}`}>
                          {map.map.name}
                        </style.MapName>
                        <style.MapQty>{map.qty}x</style.MapQty>
                      </style.MapBox>
                    ))}
              </style.ItemAndMap>
            </style.InfoBox>
          </style.MonsterInfo>
        </style.MonsterContainer>
      )}
    </style.Container>
  );
}

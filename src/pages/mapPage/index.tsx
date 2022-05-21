import React, { useEffect, useState } from "react";
import * as api from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import * as style from "./style";
import {
  Monster,
  MonsterImg,
  MonsterName,
  MonsterProperty,
  MonsterRace,
  MonsterSize,
} from "../monstersPage/style";

export default function MapPage() {
  const { id } = useParams();
  const [map, setMap] = useState<api.Map>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMapData() {
      if (!id) return;

      const { data: mapData } = await api.getMapById(parseInt(id));
      setMap(mapData);
    }
    fetchMapData();
  }, [id]);

  return (
    <style.Container>
      <style.MapImg>
        <img src={map?.imageUrl} alt={map?.name} />
      </style.MapImg>
      {map?.mapMonster.length !== 0 && (
        <style.MonsterContainer>
          {map?.mapMonster.map((monster: api.MapMonster, i: number) => (
            <Monster index={i} route="map">
              <MonsterImg>
                <img
                  onClick={() => {
                    navigate(`/monsters/${monster.monsterId}`);
                  }}
                  src={monster.monster.spriteUrl}
                  alt={monster.monster.name}
                />
              </MonsterImg>
              <MonsterName>
                <Link to={`/monsters/${monster.monsterId}`}>
                  {monster.monster.name}
                </Link>
              </MonsterName>
              <MonsterProperty property={monster.monster.stats.property.name}>
                <span>
                  {monster.monster.stats.property.name}{" "}
                  {monster.monster.stats.property.level}
                </span>
              </MonsterProperty>
              <MonsterRace>{monster.monster.stats.race.name}</MonsterRace>
              <MonsterSize>{monster.monster.stats.size.name}</MonsterSize>
              <style.MonsterQty>{monster.qty}x</style.MonsterQty>
            </Monster>
          ))}
        </style.MonsterContainer>
      )}
      {map?.entrance.length !== 0 && (
        <style.BordersMap>
          {map?.entrance.map((map: api.Border) => (
            <style.MapContainer>
              <style.MapDisplay>
                <img src={map.mapExit.imageUrl} alt={map.mapExit.name}></img>
              </style.MapDisplay>
              <style.MapName>
                <Link to={`/maps/${map.mapExitId}`}>{map.mapExit.name} </Link>
              </style.MapName>
            </style.MapContainer>
          ))}
        </style.BordersMap>
      )}
    </style.Container>
  );
}

import React, { useEffect, useState } from "react";
import * as api from "../../services/api";
import { useParams } from "react-router-dom";
import * as style from "./style";

export default function MonsterPage() {
  const { id } = useParams();
  const [monster, setMonster] = useState<api.Monster>();
  const [propertyTable, setPropertyTable] = useState<api.PropertiesBonus[]>([]);
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    async function fetchMonsterData() {
      if (!id) return;

      const { data } = await api.getMonsterById(parseInt(id));
      setMonster(data.monster);
      setPropertyTable(data.propertiesTable);
    }
    fetchMonsterData();
  }, [id]);

  console.log(monster);
  console.log(propertyTable);

  return (
    <style.Container>
      {/* {monster && (
        <style.MonsterContainer>
          <style.MonsterGif>
            <img src={monster.spriteUrl} alt={monster.name} />
          </style.MonsterGif>
          <style.MonsterStats>
            <style.StatBox>
              
            </style.StatBox>
          </style.MonsterStats>
        </style.MonsterContainer>
      )} */}
    </style.Container>
  );
}

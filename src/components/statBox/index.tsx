import React from "react";
import * as style from "./style";
import * as api from "../../services/api";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function StatBox({
  stats,
  displayInfo,
}: {
  stats: api.Stat;
  displayInfo: string;
}) {
  return (
    <style.StatBox>
      {displayInfo === "main" ? (
        <>
          {" "}
          <style.Stat position="0" property="">
            <style.StatTitle>Level: </style.StatTitle>
            <span>{stats.level}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Raça: </style.StatTitle>
            <span>{stats.race.name}</span>
          </style.Stat>
          <style.Stat position="1" property={stats.property.name}>
            <style.StatTitle>Propriedade: </style.StatTitle>
            <span>
              {stats.property.name} {stats.property.level}
            </span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Tamanho: </style.StatTitle>
            <span>{stats.size.name}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Vida: </style.StatTitle>
            <span>{stats.hp}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Ataque: </style.StatTitle>
            <span>
              {stats.attackMin}~{stats.attackMax}
            </span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Ataque Mágico: </style.StatTitle>
            <span>
              {stats.mAttackMin}~{stats.mAttackMax}
            </span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Movimento: </style.StatTitle>
            <span>{stats.movSpeed}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Velocidade de Ataque: </style.StatTitle>
            <span>{stats.aspd}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Alcance: </style.StatTitle>
            <span>{stats.range}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Precisão Necessária: </style.StatTitle>
            <span>{stats.hit}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Esquiva Necessária: </style.StatTitle>
            <span>{stats.flee}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Defesa: </style.StatTitle>
            <span>{stats.def}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>Defesa Mágica: </style.StatTitle>
            <span>{stats.mDef}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>STR: </style.StatTitle>
            <span>{stats.str}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>AGI: </style.StatTitle>
            <span>{stats.agi}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>VIT: </style.StatTitle>
            <span>{stats.vit}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>INT: </style.StatTitle>
            <span>{stats.int}</span>
          </style.Stat>
          <style.Stat position="1" property="">
            <style.StatTitle>DEX: </style.StatTitle>
            <span>{stats.dex}</span>
          </style.Stat>
          <style.Stat position="2" property="">
            <style.StatTitle>LUK: </style.StatTitle>
            <span>{stats.luk}</span>
          </style.Stat>
        </>
      ) : (
        <>
          <style.SecondaryStat position="1">
            <style.SecondaryStatName>É boss?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.isBoss}>
              {stats.isBoss ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>É Agressivo?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.isAgressive}>
              {" "}
              {stats.isAgressive ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName> Ajuda Aliados?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.helpAllies}>
              {stats.helpAllies ? <AiOutlineCheck /> : <AiOutlineClose />}{" "}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>Detecta Magia? </style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.castDetect}>
              {" "}
              {stats.castDetect ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>É Looter?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.isLooter}>
              {" "}
              {stats.isLooter ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>Spawn Fixo?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.spawnFixed}>
              {stats.spawnFixed ? <AiOutlineCheck /> : <AiOutlineClose />}{" "}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>Muda de alvo?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.changeTarget}>
              {" "}
              {stats.changeTarget ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat>
            <style.SecondaryStatName>Vê Escondido?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.hideDetect}>
              {stats.hideDetect ? <AiOutlineCheck /> : <AiOutlineClose />}{" "}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
          <style.SecondaryStat position="2">
            <style.SecondaryStatName>É imóvel?</style.SecondaryStatName>
            <style.SecondaryStatValue check={stats.isImmobile}>
              {" "}
              {stats.isImmobile ? <AiOutlineCheck /> : <AiOutlineClose />}
            </style.SecondaryStatValue>
          </style.SecondaryStat>
        </>
      )}
    </style.StatBox>
  );
}

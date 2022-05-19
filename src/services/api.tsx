import axios from "axios";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export async function getMonster(
  pageNumber: number,
  race: string,
  property: string
) {
  return baseAPI.get(
    `/monsters?page=${pageNumber}&race=${race}&property=${property}`
  );
}

export async function getMonsterById(id: number) {
  return baseAPI.get(`/monsters/${id}`);
}

export interface Race {
  id: number;
  name: string;
  stat: Stat[];
}
export interface Size {
  id: number;
  name: string;
  stat: Stat[];
}
export interface Property {
  id: number;
  name: string;
  level: number;
  stat: Stat[];
  skill: Skill[];
  item: Item[];
}

export interface Stat {
  id: number;
  attackMin: number;
  attackMax: number;
  mAttackMin: number;
  mAttackMax: number;
  expBase: number;
  expJob: number;
  level: number;
  hp: number;
  def: number;
  mDef: number;
  str: number;
  agi: number;
  vit: number;
  int: number;
  dex: number;
  luk: number;
  flee: number;
  hit: number;
  movSpeed: number;
  aspd: number;
  range: number;
  isBoss: boolean;
  isAgressive: boolean;
  helpAllies: boolean;
  castDetect: boolean;
  isLooter: boolean;
  spawnFixed: boolean;
  changeTarget: boolean;
  hideDetect: boolean;
  isImmobile: boolean;
  propertyId: number;
  property: Property;
  raceId: number;
  race: Race;
  sizeId: number;
  size: Size;
  monster: Monster[];
}

export interface Monster {
  id: number;
  name: string;
  spriteUrl: string;
  statsId: number;
  stats: Stat;
  mapMonster: MapMonster[];
  monsterSkill: MonsterSkill[];
  itemMonster: ItemMonster[];
}

export interface MapMonster {
  id: number;
  mapId: number;
  map: Map;
  monsterId: number;
  monster: Monster;
  spawnRate: number;
  qty: number;
}

export interface Map {
  id: number;
  name: string;
  imageUrl: string;
  region: Region;
  regionId: number;
  entrance: Border[];
  exit: Border[];
  mapMonster: MapMonster[];
}

export interface Region {
  id: number;
  name: string;
  map: Map[];
}

export interface Border {
  id: number;
  mapEntrance: Map;
  mapEntranceId: number;
  mapExit: Map;
  mapExitId: number;
}

export interface Skill {
  id: number;
  name: string;
  skillLevel: number;
  propertyId: number;
  property: Property;
  monsterSkill: MonsterSkill[];
}

export interface MonsterSkill {
  id: number;
  skillId: number;
  skill: Skill;
  monsterId: number;
  monster: Monster;
  castTime: number;
}

export interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
  weight: number;
  attack: number | undefined;
  defense: number | undefined;
  slot: number | undefined;
  effects: string | undefined;
  level: number | undefined;
  reqLevel: number | undefined;
  reqClass: string[];
  position: string | undefined;
  price: number;
  isEquip: boolean;
  propertyId: number;
  imageUrl: string;
  spriteUrl: string;
  cardImageUrl: string | undefined;
  property: Property;
  itemMonster: ItemMonster[];
}

export interface ItemMonster {
  id: number;
  itemId: number;
  monsterId: number;
  dropRate: number;
  item: Item;
  monster: Monster;
}

export interface PropertiesBonus {
  id: number;
  defPropertyId: number;
  atkPropertyId: number;
  defProperty: Property;
  atkProperty: Property;
  bonus: number;
}

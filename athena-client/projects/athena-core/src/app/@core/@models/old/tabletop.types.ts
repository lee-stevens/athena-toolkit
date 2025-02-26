export type TabletopGame = 'Warhammer 40k' | 'Warhammer Age of Sigmar';

export type W40kKeyword = 'Infantry' | 'Character' | 'Grenadres' | 'Imperium' | 'Tacticus' | 'Primaris' | 'Captain';

export type W40kFactionKeyword = 'AdeptusAstartes';

export type W40kUnitName = 'Primaris Captain' | 'Primaris Lieutenant';

export type W40kAbilities = 'Rites of Battles' | 'Finest Hour';

export interface ITabletopDatacard {
  game: TabletopGame;
}

export interface IW40kDatacard extends ITabletopDatacard {
  name: W40kUnitName;
  characteristics: {
    movement: number;
    toughness: number;
    save: number;
    wounds: number;
    leadership: number;
    oc: number;
  };
  keywords: W40kKeyword[];
  factionKeywords: W40kFactionKeyword[];
  equipment: {
    rangedWeapons: IW40kRangedWeapon[];
    meleeWeapons: IW40kMeleeWeapon[];
    wargearOptions: IW40kWargear[];
  };
  unitComposition: IW40kUnitComposition[];
  abilities: IW40kAbility[];
}

export interface IW40kUnitComposition {
  name: W40kUnitName;
  count: number;
}

export interface IW40kWeapon {
  name: string;
  attack: number;
  strength: number;
  armorPenetration: number;
  damage: number;
}

export interface IW40kRangedWeapon extends IW40kWeapon {
  range: number;
  ballisticSkill: number;
}

export interface IW40kMeleeWeapon extends IW40kWeapon {
  weaponSkill: number;
}

export interface IW40kWargear {
  name: string;
  description: string;
}

export interface IW40kAbility {
  name: string;
  description: string;
}

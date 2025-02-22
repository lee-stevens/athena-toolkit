import { IW40kDatacard as IW40kDatacard } from '@Models/tabletop.types';

export const W40K_DATACARDS: IW40kDatacard[] = [
  {
    game: 'Warhammer 40k',
    name: 'Primaris Captain',
    characteristics: {
      movement: 6,
      toughness: 4,
      save: 3,
      wounds: 5,
      leadership: 6,
      oc: 1,
    },
    keywords: ['Character', 'Infantry', 'Primaris', 'Captain'],
    factionKeywords: ['AdeptusAstartes'],
    equipment: {
      rangedWeapons: [
        {
          name: 'Master-crafted auto bolt rifle',
          attack: 3,
          strength: 4,
          armorPenetration: 0,
          damage: 1,
          range: 24,
          ballisticSkill: 2,
        },
      ],
      meleeWeapons: [
        {
          name: 'Master-crafted power sword',
          attack: 4,
          strength: 4,
          armorPenetration: 3,
          damage: 1,
          weaponSkill: 2,
        },
      ],
      wargearOptions: [
        {
          name: 'Iron Halo',
          description: '4+ invulnerable save',
        },
      ],
    },
    unitComposition: [
      {
        name: 'Primaris Captain',
        count: 1,
      },
    ],
    abilities: [],
  },
];

export const constTokens = {
  'Apprentice Sheng': 'Apprentice Sheng',
  'Arachir the Ancient One': 'Arachir the Ancient One',
  'Arthom The Hunter': 'Arthom The Hunter',
  Barbaria: 'Barbaria',
  'Battlemaster Zunzu': 'Battlemaster Zunzu',
  'Big Boss Trolliver': 'Big Boss Trolliver',
  Burster: 'Burster',
  'Captain Jones': 'Captain Jones',
  'Chizzoron the Distorter': 'Chizzoron the Distorter',
  Chopper: 'Chopper',
  'Countess Sorrow': 'Countess Sorrow',
  'crustaceae giganticae': 'Crustacea Gigantica',
  'Cublarc the Plunderer': 'Cublarc the Plunderer',
  Dharalion: 'Dharalion',
  'Diblis the Fair': 'Diblis the Fair',
  'Dreadful Disruptor': 'Dreadful Disruptor',
  Dracola: 'Dracola',
  draptors: 'Draptor',
  Dreadmaw: 'Dreadmaw',
  Fernfang: 'Fernfang',
  Ferumbras: 'Ferumbras',
  'Flamecaller Zazrak': 'Flamecaller Zazrak',
  Fleabringer: 'Fleabringer',
  'Foreman Kneebiter': 'Foreman Kneebiter',
  Furyosa: 'Furyosa',
  "Gaz'haragoth": "Gaz'haragoth",
  'General Murius': 'General Murius',
  Ghazbaran: 'Ghazbaran',
  'Grand Mother Foulscale': 'Grand Mother Foulscale',
  'Grandfather Tridian': 'Grandfather Tridian',
  'Gravelord Oshuran': 'Gravelord Oshuran',
  Groam: 'Groam',
  Grorlam: 'Grorlam',
  'Hairman the Huge': 'Hairman the Huge',
  Hatebreeder: 'Hatebreeder',
  'High Templar Cobrass': 'High Templar Cobrass',
  Hirintror: 'Hirintror',
  Mahatheb: 'Mahatheb',
  'Man in the Cave': 'Man in the Cave',
  Massacre: 'Massacre',
  Maw: 'Maw',
  'midnight panthers': 'Midnight Panther',
  Mindmasher: 'Mindmasher',
  Morgaroth: 'Morgaroth',
  Morshabaal: 'Morshabaal',
  'Mr. Punish': 'Mr. Punish',
  Munster: 'Munster',
  Ocyakao: 'Ocyakao',
  Omrafir: 'Omrafir',
  'Oodok Witchmaster': 'Oodok Witchmaster',
  Orshabaal: 'Orshabaal',
  Rotspit: 'Rotspit',
  'Rottie the Rotworm': 'Rottie the Rotworm',
  'Rotworm Queens': 'Rotworm Queen',
  'Rukor Zad': 'Rukor Zad',
  Shadowstalker: 'Shadowstalker',
  Shlorg: 'Shlorg',
  'Sir Valorcrest': 'Sir Valorcrest',
  'Smuggler Baron Silvertoe': 'Smuggler Baron Silvertoe',
  Teleskor: 'Teleskor',
  'The Abomination': 'The Abomination',
  'The Big Bad One': 'The Big Bad One',
  'The Blightfather': 'The Blightfather',
  'The Evil Eye': 'The Evil Eye',
  'The Frog Prince': 'The Frog Prince',
  'The Handmaiden': 'The Handmaiden',
  'The Hungerer': 'The Hungerer',
  'The Imperor': 'The Imperor',
  'The Manhunter': 'The Manhunter',
  'The Mean Masher': 'The Mean Masher',
  'The Old Whopper': 'The Old Whopper',
  'The Pale Count': 'The Pale Count',
  'The Plasmother': 'The Plasmother',
  'The Voice Of Ruin': 'The Voice Of Ruin',
  'The Welter': 'The Welter',
  Tyrn: 'Tyrn',
  'Tzumrah The Dazzler': 'Tzumrah The Dazzler',
  'undead cavebears': 'Undead Cavebear',
  'Warlord Ruzad': 'Warlord Ruzad',
  'Willi Wasp': 'Willi Wasp',
  'White Pale': 'White Pale',
  Xenia: 'Xenia',
  'Yaga the Crone': 'Yaga the Crone',
  yetis: 'Yeti',
  Zarabustor: 'Zarabustor',
  'Zevelon Duskbringer': 'Zevelon Duskbringer',
  Zomba: 'Zomba',
  'Zulazza the Corruptor': 'Zulazza the Corruptor',
  Zushuka: 'Zushuka',
} as const

export type BossToken = keyof typeof constTokens
export type TrackedBossName = ValueOf<typeof constTokens>

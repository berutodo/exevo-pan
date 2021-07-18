export const mockedCharacterObject = {
  id: 123456,
  nickname: 'Ksu',
  auctionEnd: 1624812300,
  currentBid: 9500,
  hasBeenBidded: false,
  outfitId: '130_0',
  serverId: 32,
  vocationId: 4,
  level: 607,
  skills: {
    magic: 104.41,
    club: 14.27,
    fist: 16.65,
    sword: 14.2,
    fishing: 10,
    axe: 12.49,
    distance: 13.13,
    shielding: 33.61,
  },
  items: [29423, 29426, 30400, 30403],
  charms: ['Freeze', 'Poison', 'Wound', 'Zap'],
  transfer: false,
  imbuements: [
    'Critical Hit',
    'Death Damage',
    'Death Protection',
    'Energy Damage',
    'Energy Protection',
    'Fire Damage',
    'Fire Protection',
    'Life Leech',
    'Magic Level',
    'Mana Leech',
    'Speed',
  ],
  hasSoulwar: true,
  serverData: {
    battleye: true,
    experimental: true,
    pvpType: { string: 'Hardcore', type: 3 },
    serverId: 30,
    serverName: 'Pacera',
    serverLocation: { string: 'BR', type: 2 },
  },
} as CharacterObject

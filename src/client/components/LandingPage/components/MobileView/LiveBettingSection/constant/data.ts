export const SPORT_DATA = [
  {
    gameType: 'Football',
    eventType: ['1X2','Over/Under', 'Next Goal', 'Double Chance', 'Handicap', 'GG/NG', 'Home O/U', 'Away O/U'],
    '1X2': ['1', 'X', '2'],
    'Over/Under': ['1', 'X', '2'],
    'Next Goal': ['1', 'None', '2'],
    'Double Chance': ['1X', '12', 'X2'],
    'Handicap': ['HC', '1', 'X', '2'],
    'GG/NG': ['GG', 'NG'],
    'Home O/U': ['Goals', 'Over', 'Under'],
    'Away O/U': ['Goals', 'Over', 'Under']
  },
  {
    gameType: 'Basketball',
    eventType: ['Winner', 'Handicap', 'O/U', 'Home O/U', 'Away O/U'],
    'Winner': ['1', '2'],
    'Handicap': ['Points', '1', '2'],
    'O/U': ['Points','Over','Under'],
    'Home O/U': ['Points', 'Over', 'Under'],
    'Away O/U': ['Points', 'Over', 'Under'],
  },
  {
    gameType: 'Table Tennis',
    eventType: ['Winner', 'Game winner', 'Game O/U'],
    'Winner': ['1', '2'],
    'Game winner': ['Games', '1', '2'],
    'Game O/U': ['Points', 'Over', 'Under']
  },
  {
    gameType: 'Baseball',
    eventType: ['Winner', 'O/U', 'Handicap'],
    'Winner': ['1', '2'],
    'O/U': ['Runs', 'Over', 'Under'],
    'Handicap': ['Runs', '1', '2']
  },
  {
    gameType: 'Rugby',
    eventType: ['1X2', 'Handicap', 'Over/Under'],
    '1X2': ['1', 'X', '2'],
    'Handicap': ['Goals', '1', 'X', '2'],
    'Over/Under': ['Goals', 'Over', 'Under']
  },
  {
    gameType: 'Ice Hockey',
    eventType: ['Winner', 'O/U'],
    'Winner': ['1', '2'],
    'O/U': ['Goals','Over','Under']
  },
  {
    gameType: 'Volleyball',
    eventType: ['Winner', 'Set Winner', 'Total points'],
    'Winner': ['1', '2'],
    'Set Winner': ['Sets', '1', '2'],
    'Total point': ['Points', 'Over', 'Under'] 
  },
  {
    gameType: 'Darts',
    eventType: ['Winner'],
    'Winner': ['1', '2'],
  },
  {
    gameType: 'Handball',
    eventType: ['1X2', 'Over/Under', 'Handicap'],
    '1X2': ['1', 'X', '2'],
    'Over/Under': ['Goals', 'Over', 'Under'],
    'Handicap': ['Goals', 'Over', 'Under'],
  },
  {
    gameType: 'Esports Football',
    eventType: ['1X2', 'Over/Under', 'Double Chance', 'Next Goal', 'Home O/U', 'Away O/U'],
    '1X2': ['1', 'X', '2'],
    'Over/Under': ['Goals', 'Over', 'Under'],
    'Double Chance': ['1X', '12', 'X2'],
    'Next Goal': ['1', 'None', '2'],
    'Home O/U': ['Goals', 'Over', 'Under'],
    'Away O/U': ['Goals', 'Over', 'Under']
  }
]


export const MATCH_DATA = [
  {
    leagueType: 'Interbational - CONCACAF National League',
    teamOne: 'Belgium',
    teamTwo: 'Azerbaijan',
    teamScore: ['4', '0'],
    live: true
  },
  {
    leagueType: 'Interbational - CONCACAF National League',
    teamOne: 'Saint Kitts and Nevis',
    teamTwo: 'Guadeloupe',
    teamScore: ['2', '3'],
    live: true
  },
  {
    leagueType: 'Spain - Primera Federacion',
    teamOne: 'Real Madrid Castilla',
    teamTwo: 'CF Algeciras',
    teamScore: ['1', '2'],
    live: true
  },
  {
    leagueType: 'Spain - Primera Federacion',
    teamOne: 'Sestao River Club',
    teamTwo: 'CF Fuenlabrade',
    teamScore: ['0', '0'],
    live: false
  }
]
export const LINK_GAME_TYPES: {  name: string; data?: { name: string }[] }[] = [
    {name: 'Basketball'},
    {name: 'Table Tennis'},
    { name: 'Baseball' },
    { name: 'Rugby' },
    { name: 'Volleyball' },
    {
        name: 'More Sports', data: [
            {name: 'American Football'},
            { name: 'Esports Football'},
            {name: 'Ice Hockey'},
            {name: 'Darts'},
            {name: 'Handball'},
    ]}
]

export const LEAGUES_DATA = [
    { title: 'Bhutan', leagueType: 'Premier' },
    { title: 'International Clubs', leagueType: 'AFC Champion league' },
    { title: 'Bulgaria', leagueType: 'Second Prof.League' },
    { title: 'Armenia', leagueType: 'Premier League' },
    { title: 'Portugal', leagueType: 'U23 Liga Revelacao'}
]

export const GAME_VALUES = [
	'1',
	'1.1',
	'1.2',
	'1.3',
	'1.4',
	'1.5',
    '2',
];

export const BET_DATA = [
    {
        date: '08/11 Thursday',
        dataValue: [{
            time: '22:00',
            sportId: '23340',
            teamOne: 'CD Fuerte San Francisco Morazan',
            teamTwo: 'CD Aguila San Miguel',
            win: '2.30',
            draw: '3.33',
            lose: '2.54',
            goal: '22.5',
            over: '2.9',
            under: '2.7',
            sportCount: '23'
        },
        {
            time: '22:00',
            sportId: '23340',
            teamOne: 'CD Fuerte San Francisco Morazan',
            teamTwo: 'CD Aguila San Miguel',
            win: '2.30',
            draw: '3.33',
            lose: '2.54',
            goal: '2.5',
            over: '1.91',
            under: '1.76',
            sportCount: '23'
        }
        ],
    },
    {
        date: '09/11 Friday',
        dataValue: [
            {
                time: '22:00',
                sportId: '24660',
                teamOne: 'CD Platense Municipal Zacateczacto pita',
                teamTwo: 'CD Aguila San Miguel',
                win: '2.30',
                draw: '3.33',
                lose: '1.94',
                goal: '2.5',
                over: '1.91',
                under: '1.74',
                sportCount: '173'
            }
        ]
    },
]
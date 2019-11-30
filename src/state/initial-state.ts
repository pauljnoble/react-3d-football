export default {
    activeTeamId: 1,
    activePlayerId: null,
    activeFormationId: 1,
    mouseOverPlayerId: null,
    playersVisible: false,
    isLoading: true,
    match: {
        time: '14:00 Sun 24 Nov 2019',
        venue: 'Stamford Bridge, London',
    },
    formations: [
        {
            id: 1,
            name: '4-2-3-1',
            positions: [
                {
                    x: 10,
                    y: 50,
                },
                {
                    x: 30,
                    y: 13,
                },
                {
                    x: 30,
                    y: 40,
                },
                {
                    x: 30,
                    y: 65,
                },
                {
                    x: 30,
                    y: 92,
                },
                {
                    x: 50,
                    y: 30,
                },
                {
                    x: 50,
                    y: 70,
                },
                {
                    x: 70,
                    y: 25,
                },
                {
                    x: 70,
                    y: 50,
                },
                {
                    x: 70,
                    y: 75,
                },
                {
                    x: 87,
                    y: 50,
                },
            ],
        },
        {
            id: 2,
            name: '4-4-2',
            positions: [
                {
                    x: 10,
                    y: 50,
                },
                {
                    x: 30,
                    y: 20,
                },
                {
                    x: 30,
                    y: 40,
                },
                {
                    x: 30,
                    y: 60,
                },
                {
                    x: 30,
                    y: 80,
                },
                {
                    x: 50,
                    y: 20,
                },
                {
                    x: 50,
                    y: 40,
                },
                {
                    x: 50,
                    y: 60,
                },
                {
                    x: 50,
                    y: 80,
                },
                {
                    x: 70,
                    y: 33,
                },
                {
                    x: 70,
                    y: 66,
                },
            ],
        },
        {
            id: 3,
            name: '4-3-3',
            positions: [
                {
                    x: 10,
                    y: 50,
                },
                {
                    x: 30,
                    y: 20,
                },
                {
                    x: 30,
                    y: 40,
                },
                {
                    x: 30,
                    y: 60,
                },
                {
                    x: 30,
                    y: 80,
                },
                {
                    x: 50,
                    y: 25,
                },
                {
                    x: 50,
                    y: 50,
                },
                {
                    x: 50,
                    y: 75,
                },
                {
                    x: 70,
                    y: 25,
                },
                {
                    x: 70,
                    y: 50,
                },
                {
                    x: 70,
                    y: 75,
                },
            ],
        },
        {
            id: 4,
            name: '4-5-1',
            positions: [
                {
                    x: 10,
                    y: 50,
                },
                {
                    x: 30,
                    y: 20,
                },
                {
                    x: 30,
                    y: 40,
                },
                {
                    x: 30,
                    y: 60,
                },
                {
                    x: 30,
                    y: 80,
                },
                {
                    x: 50,
                    y: 25,
                },
                {
                    x: 50,
                    y: 50,
                },
                {
                    x: 50,
                    y: 75,
                },
                {
                    x: 60,
                    y: 37,
                },
                {
                    x: 60,
                    y: 62,
                },
                {
                    x: 80,
                    y: 50,
                },
            ],
        },
        {
            id: 5,
            name: '3-5-2',
            positions: [
                {
                    x: 10,
                    y: 50,
                },
                {
                    x: 25,
                    y: 25,
                },
                {
                    x: 25,
                    y: 50,
                },
                {
                    x: 25,
                    y: 75,
                },
                {
                    x: 42,
                    y: 40,
                },
                {
                    x: 42,
                    y: 60,
                },
                {
                    x: 55,
                    y: 15,
                },
                {
                    x: 55,
                    y: 50,
                },
                {
                    x: 55,
                    y: 85,
                },

                {
                    x: 70,
                    y: 33,
                },
                {
                    x: 70,
                    y: 66,
                },
            ],
        },
    ],
    teams: [
        {
            id: 1,
            title: 'Chelsea',
            color: '#3750b1',
            formationId: 1,
            players: [
                {
                    id: 1,
                    teamId: 1,
                    firstName: 'Kepa',
                    lastName: 'Arrizabalaga',
                    position: 'Midfield',
                    number: '1',
                    thumbnail: 'chelsea-th-1.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 2,
                    teamId: 1,
                    firstName: 'Antonio',
                    lastName: 'Rudiger',
                    position: 'Midfield',
                    number: '2',
                    thumbnail: 'chelsea-th-2.png',
                    hero: 'chelsea-hero-2.jpg',
                    foo: 'bar',
                },
                {
                    id: 3,
                    teamId: 1,
                    firstName: 'Marcus',
                    lastName: 'Alonso',
                    position: 'Midfield',
                    number: '3',
                    thumbnail: 'chelsea-th-3.png',
                    hero: 'chelsea-hero-3.jpg',
                    foo: 'bar',
                },
                {
                    id: 4,
                    teamId: 1,
                    firstName: 'Andreas',
                    lastName: 'Christensen',
                    position: 'Midfield',
                    number: '4',
                    thumbnail: 'chelsea-th-4.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 5,
                    teamId: 1,
                    firstName: '',
                    lastName: 'Jorghino',
                    position: 'Midfield',
                    number: '5',
                    thumbnail: 'chelsea-th-5.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 6,
                    teamId: 1,
                    firstName: "N'Golo",
                    lastName: 'Kante',
                    position: 'Midfield',
                    number: '7',
                    thumbnail: 'chelsea-th-7.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 7,
                    teamId: 1,
                    firstName: 'Ross',
                    lastName: 'Barkley',
                    position: 'Midfield',
                    number: '8',
                    thumbnail: 'chelsea-th-8.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 8,
                    teamId: 1,
                    firstName: 'Pedro',
                    lastName: 'Bale',
                    position: 'Midfield',
                    number: '11',
                    thumbnail: 'chelsea-th-11.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 9,
                    teamId: 1,
                    firstName: '',
                    lastName: 'Willian',
                    position: 'Midfield',
                    number: '10',
                    thumbnail: 'chelsea-th-10.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 10,
                    teamId: 1,
                    firstName: 'Oliver',
                    lastName: 'Giroud',
                    position: 'Midfield',
                    number: '18',
                    thumbnail: 'chelsea-th-18.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 11,
                    teamId: 1,
                    firstName: 'Mason',
                    lastName: 'Mount',
                    position: 'Midfield',
                    number: '19',
                    thumbnail: 'chelsea-th-19.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
            ],
        },
        {
            id: 2,
            title: 'Barcelona',
            color: '#c9181d',
            formationId: 3,
            players: [
                {
                    id: 31,
                    teamId: 2,
                    x: 87,
                    y: 50,
                    firstName: 'Marc-André',
                    lastName: 'ter Stegen',
                    position: 'Goalie',
                    number: '1',
                    thumbnail: 'barcelona-th-1.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 30,
                    teamId: 2,
                    x: 70,
                    y: 75,
                    firstName: 'Nélson',
                    lastName: 'Semedo',
                    position: 'Defender',
                    number: '2',
                    thumbnail: 'barcelona-th-2.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 29,
                    teamId: 2,
                    x: 70,
                    y: 50,
                    firstName: 'Gerard',
                    lastName: 'Piqué',
                    position: 'Midfield',
                    number: '3',
                    thumbnail: 'barcelona-th-3.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 28,
                    teamId: 2,
                    x: 70,
                    y: 25,
                    firstName: 'Sergio',
                    lastName: 'Busquets',
                    position: 'Midfield',
                    number: '5',
                    thumbnail: 'barcelona-th-5.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 27,
                    teamId: 2,
                    x: 70,
                    y: 25,
                    firstName: 'Jean-Clair ',
                    lastName: 'Todibo',
                    position: 'Midfield',
                    number: '6',
                    thumbnail: 'barcelona-th-6.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 26,
                    teamId: 2,
                    x: 52,
                    y: 92,
                    firstName: 'Carkes',
                    lastName: 'Aleñá',
                    position: 'Midfield',
                    number: '19',
                    thumbnail: 'barcelona-th-19.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 25,
                    teamId: 2,
                    x: 48,
                    y: 65,
                    firstName: '',
                    lastName: 'Arthur',
                    position: 'Midfield',
                    number: '8',
                    thumbnail: 'barcelona-th-8.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },

                {
                    id: 24,
                    teamId: 2,
                    x: 52,
                    y: 13,
                    firstName: 'Ican',
                    lastName: 'Rakitic',
                    position: 'Midfield',
                    number: '4',
                    thumbnail: 'barcelona-th-4.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
                {
                    id: 23,
                    teamId: 2,
                    x: 30,
                    y: 70,
                    firstName: 'Ousmane',
                    lastName: 'Dembélé',
                    position: 'Midfield',
                    number: '11',
                    thumbnail: 'barcelona-th-11.png',
                    hero: 'chelsea-hero-3.jpg',
                    foo: 'bar',
                },
                {
                    id: 22,
                    teamId: 2,
                    x: 30,
                    y: 30,
                    firstName: 'Luis',
                    lastName: 'Suárez',
                    position: 'Attacker',
                    number: '9',
                    thumbnail: 'barcelona-th-9.png',
                    hero: 'chelsea-hero-2.jpg',
                    foo: 'bar',
                },
                {
                    id: 21,
                    teamId: 2,
                    x: 13,
                    y: 50,
                    firstName: '',
                    lastName: 'Messi',
                    position: 'Midfield',
                    number: '10',
                    thumbnail: 'barcelona-th-10.png',
                    hero: 'chelsea-hero-1.jpg',
                    foo: 'bar',
                },
            ],
        },
    ],
};

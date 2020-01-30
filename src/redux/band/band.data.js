const BAND_DATA = {
    ebk: {
        id: 1,
        title: 'The Everybody Knows',
        routeName: 'band/ebk',
        items: [
            {
                id: 1,
                date: '8.4.2016',
                venue: 'Lucky Monkeys',
                town: 'Lappeenranta',
                extra: 'VV55, Ghost World, Plastic Tones'
            },
            {
                id: 2,
                date: '9.4.2016',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Ghost World, Plastic Tones'
            },
            {
                id: 3,
                date: '28.5.2016',
                venue: 'Kaivuri Pub',
                town: 'Kuopio',
                extra: 'Kaupungin Valot, Joni Ekman & Koira, Ongelma, Dead Nation, Perseenpyyhkijät, The Cotards'
            },
            {
                id: 4,
                date: '10.6.2016',
                venue: 'Mikon mökki',
                town: 'Nilsiä',
                extra: ''
            },
            {
                id: 5,
                date: '1.7.2016',
                venue: 'Golden Classics Bar & Cafe',
                town: 'Helsinki',
                extra: 'U.F. OJala, Lazards'
            },
            {
                id: 6,
                date: '2.12.2016',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Ongelma, Ghost World'
            },
            {
                id: 7,
                date: '3.12.2016',
                venue: 'Tukikohta',
                town: 'Oulu',
                extra: 'Nuoret Sankarit, Blossom Hill, The Handshake, Annes'
            },
            {
                id: 8,
                date: '16.12.2016',
                venue: 'Bar Downtown',
                town: 'Kouvola',
                extra: 'Nuoret Sankarit, Teme & Bändin Jätkät Plays Miettiin, We Are Waiting'
            },
            {
                id: 9,
                date: '17.12.2016',
                venue: 'Galleria Hoi Sie',
                town: 'Lappeenranta',
                extra: 'Nuoret Sankarit'
            },
            {
                id: 10,
                date: '17.2.2017',
                venue: 'Kulttuurikahvila Laituri',
                town: 'Joensuu',
                extra: 'Real Tears, Plastic Tones, Nuoret Sankarit'
            },
            {
                id: 11,
                date: '4.3.2017',
                venue: 'Kaivuri Pub',
                town: 'Kuopio',
                extra: "Gretel's Moonlight Motel, Sister Disaster, Jukka Nissinen, The Cotards"
            },
            {
                id: 12,
                date: '1.4.2017',
                venue: 'Kulttuurikahvila Laituri',
                town: 'Joensuu',
                extra: 'Second-Hand Apes, Idän Mies, Juha Rautio'
            },
            {
                id: 13,
                date: '7.4.2017',
                venue: 'Ravintola Kerubi',
                town: 'Joensuu',
                extra: 'Anal Thunder, Nyrkkitappelu, Ghost World'
            },
            {
                id: 14,
                date: '8.4.2017',
                venue: 'Galleria Hoi Sie',
                town: 'Lappeenranta',
                extra: 'Ghost World'
            },
            {
                id: 15,
                date: '14.4.2017',
                venue: 'Golden Classics Bar & Cafe',
                town: 'Helsinki',
                extra: 'Hemmo Raunio, Tamara Luonto, Ghost World'
            },
            {
                id: 16,
                date: '4.5.2017',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Hextalls, Kids Music'
            },
            {
                id: 19,
                date: '19.5.2017',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Nuoret Sankarit, Häiriköt'
            },
            {
                id: 22,
                date: '19.8.2017',
                venue: 'Rantasauna',
                town: 'Eräjärvi',
                extra: 'Second-Hand Apes'
            },
            {
                id: 23,
                date: '6.10.2017',
                venue: 'Tukikohta',
                town: 'Oulu',
                extra: "Gretel's Moonlight Motel, Henna Emilia & Houreet"
            },
            {
                id: 24,
                date: '7.10.2017',
                venue: 'Kulttuurikahvila Laituri',
                town: 'Joensuu',
                extra: "Gretel's Moonlight Motel, Henna Emilia & Houreet"
            },
            {
                id: 26,
                date: '24.11.2017',
                venue: 'Bar Cave',
                town: 'Iisalmi',
                extra: 'Ongelma, Perseenpyyhkijät, Thing-66'
            },
            {
                id: 27,
                date: '25.11.2017',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Hard Action, Ghost World'
            },
            {
                id: 31,
                date: '2.3.2018',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Tamara Luonto, Joni Ekman & Koira'
            },
            {
                id: 32,
                date: '3.3.2018',
                venue: 'Kaivuri Pub',
                town: 'Kuopio',
                extra: 'J. Kiesi Grandes, Tamara Luonto, Ongelma'
            },
            {
                id: 36,
                date: '9.5.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Fashionism, Plastic Tones, Karkki & the Car Keys'
            },
            {
                id: 37,
                date: '10.5.2018',
                venue: 'TVO',
                town: 'Turku',
                extra: 'Fashionism, Lagrange Points'
            },
            {
                id: 38,
                date: '11.5.2018',
                venue: 'Ravintola Kerubi',
                town: 'Joensuu',
                extra: 'Fashionism, Intetskjønn'
            },
            {
                id: 39,
                date: '12.5.2018',
                venue: 'Galleria Hoi Sie',
                town: 'Lappeenranta',
                extra: 'Fashionism, Lähtevät Kaukojunat'
            },
            {
                id: 40,
                date: '13.5.2018',
                venue: 'Terassipub Yläkerta',
                town: 'Tampere',
                extra: 'Fashionism, Lagrange Points'
            },
            {
                id: 42,
                date: '15.5.2018',
                venue: 'Sveta Baar',
                town: 'Tallinn',
                extra: 'Fashionism, Sex Kasetta'
            },
            {
                id: 43,
                date: '17.5.2018',
                venue: 'ALIBI',
                town: 'Pärnu',
                extra: 'Fashionism'
            },
            {
                id: 44,
                date: '18.5.2018',
                venue: 'Crocodile Klub',
                town: 'Tartu',
                extra: 'Fashionism, Cojones Briefcase'
            },
            {
                id: 45,
                date: '19.5.2018',
                venue: 'Depo',
                town: 'Riga',
                extra: 'Fashionism, Silvia'
            },
            {
                id: 46,
                date: '20.5.2018',
                venue: 'Socialinis Centras Emma',
                town: 'Kaunas',
                extra: 'Fashionism'
            },
            {
                id: 61,
                date: '19.10.2018',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Karkki & the Car Keys, Ghost World'
            }
        ]
    },
    pinkrat: {
        id: 2,
        title: 'Pink Rat',
        routeName: 'band/pinkrat',
        items: [
            {
                id: 17,
                date: '12.5.2017',
                venue: 'Kulttuuritallit',
                town: 'Kouvola',
                extra: 'Demon Head, Plastic Tones, Grateful Däd, Kylmä Hiki'
            },
            {
                id: 18,
                date: '13.5.2017',
                venue: 'Väen Talo',
                town: 'Joensuu',
                extra: 'Acid Runs, Sick Urge, The Cotards'
            },
            {
                id: 21,
                date: '22.7.2017',
                venue: 'Wäiski',
                town: 'Helsinki',
                extra: 'DD Owen, The Achtungs, Black Monks, Goo-Hags'
            },
            {
                id: 25,
                date: '4.11.2017',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Lazards, The Toxics, Vicious Mens'
            },
            {
                id: 29,
                date: '13.1.2018',
                venue: 'Ravintola Cactus',
                town: 'Helsinki',
                extra: 'Testaa Rosso, Kids Music'
            }
        ]
    },
    millionbeers: {
        id: 3,
        title: 'Million Beers',
        routeName: 'band/millionbeers',
        items: [
            {
                id: 20,
                date: '12.7.2017',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Laiskat Silmät, Laiton Uhkaus'
            }
        ]
    },
    tnt: {
        id: 4,
        title: 'Pete TNT Band',
        routeName: 'petetntband',
        items: [
            {
                id: 28,
                date: '16.12.2017',
                venue: 'Teen Wolf Records',
                town: 'Helsinki',
                extra: "'Tunnit'"
            },
            {
                id: 30,
                date: '8.2.2018',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'Joni Ekman & Koira, Tamara Luonto'
            },
            {
                id: 33,
                date: '7.4.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Yellow Plague, Lame Duck, Piinaviikko'
            },
            {
                id: 48,
                date: '30.6.2018',
                venue: 'Vastavirta',
                town: 'Tampere',
                extra: 'Kaupungin Valot, Lähtevät Kaukojunat'
            },
            {
                id: 49,
                date: '20.7.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Joni Ekman & HIV, Punk Ekman, Testaa Rosso'
            },
            {
                id: 52,
                date: '17.8.2018',
                venue: 'Rantasauna',
                town: 'Eräjärvi',
                extra: 'Linkopii, Tamara Luonto, Karkki & the Car Keys'
            },
            {
                id: 54,
                date: '29.8.2018',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'Sister Disaster, Tuntematon Tie, Laiskat Silmät'
            },
            {
                id: 57,
                date: '18.9.2018',
                venue: 'Siltanen',
                town: 'Helsinki',
                extra: 'The Toxics'
            },
            {
                id: 58,
                date: '28.9.2018',
                venue: 'Ääniwalli',
                town: 'Helsinki',
                extra: 'Parasomnia, Rue Morgue, Miettiin, Kynnet, Generals, Plastic Tones, Sähkö-Isku, Foreseen'
            },
            {
                id: 63,
                date: '25.10.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Rakas Nikotus, Tohtori Koira, Tamara Luonto'
            },
            {
                id: 67,
                date: '8.12.2018',
                venue: 'Haukka Music Bar',
                town: 'Kotka',
                extra: 'Kosteusvaurio, Mäski'
            },
            {
                id: 68,
                date: '1.2.2019',
                venue: 'Vastavirta',
                town: 'Tampere',
                extra: 'Tamara Luonto, The Achtungs'
            },
            {
                id: 70,
                date: '15.2.2019',
                venue: 'Mascot Bar & Live Stage',
                town: 'Helsinki',
                extra: 'Miettiin'
            },
            {
                id: 72,
                date: '15.3.2019',
                venue: 'TVO',
                town: 'Turku',
                extra: 'Pää Kii, Tohtori Koira, Outo Valo'
            },
            {
                id: 75,
                date: '22.3.2019',
                venue: 'Ravintola Kerubi',
                town: 'Joensuu',
                extra: 'Pää Kii, White Tears'
            },
            {
                id: 94,
                date: '25.10.2019',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Widows, The Toxics, Violent Spirit'
            },
            {
                id: 96,
                date: '7.11.2019',
                venue: "Henry's Pub",
                town: 'Helsinki',
                extra: 'Lähiöbotox'
            },
            {
                id: 97,
                date: '28.11.2019',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Foreseen, Gray State, Kohti Tuhoa'
            },
            {
                id: 105,
                date: '17.1.2020',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Gretel Kivioja, Plastic Tones, The Lefties, Sir Liselot, Hollot Koirat Plays Popeda'
            }
        ]
    },
    kck: {
        id: 5,
        title: 'Karkki & the Car Keys',
        routeName: 'band/kck',
        items: [
            {
                id: 34,
                date: '4.5.2018',
                venue: 'Mascot Bar & Live Stage',
                town: 'Helsinki',
                extra: 'Hulda Huima & Hitaat Sekunnit, Lokit'
            },
            {
                id: 35,
                date: '9.5.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Fashionism, Plastic Tones, The Everybody Knows'
            },
            {
                id: 41,
                date: '14.5.2018',
                venue: 'Teen Wolf Records',
                town: 'Helsinki',
                extra: 'Fashionism'
            },
            {
                id: 47,
                date: '29.6.2018',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'Kaupungin Valot, Lähtevät Kaukojunat'
            },
            {
                id: 50,
                date: '27.7.2018',
                venue: 'Ääniwalli',
                town: 'Helsinki',
                extra: 'Hori Smoku Summer Boogaloo: Atom Mouth Gimlies, The Phonochromes, Kynnet, Gestures, Kid Congo Powers & the Pink Monkey Birds, The Flaming Sideburns, Marked Men'
            },
            {
                id: 51,
                date: '17.8.2018',
                venue: 'Rantasauna',
                town: 'Eräjärvi',
                extra: 'Linkopii, Tamara Luonto, Rokets, Pete TNT Band'
            },
            {
                id: 53,
                date: '18.8.2018',
                venue: 'Terassi Pub Yläkerta',
                town: 'Tampere',
                extra: 'Linkopii, Tamara Luonto'
            },
            {
                id: 55,
                date: '14.9.2018',
                venue: 'Haukka Music Bar',
                town: 'Kotka',
                extra: 'Rokets'
            },
            {
                id: 56,
                date: '15.9.2019',
                venue: 'Galleria Hoi Sie',
                town: 'Lappeenranta',
                extra: 'Rokets, Slack Bird, Goo-Hags'
            },
            {
                id: 59,
                date: '5.10.2018',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'The Toxics, Maria & Marsialaiset, The Spoonshiners'
            },
            {
                id: 60,
                date: '19.10.2018',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'The Everybody Knows, Ghost World'
            },
            {
                id: 62,
                date: '20.10.2018',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Flies Flies Flies, DGD, Maustetytöt'
            },
            {
                id: 64,
                date: '27.10.2018',
                venue: 'Kellosali',
                town: 'Helsinki',
                extra: 'Cleaning Women'
            },
            {
                id: 65,
                date: '24.11.2018',
                venue: 'TEAK',
                town: 'Helsinki',
                extra: 'Otto & Aabee 60v: AH and the Mosquitos, HÄN, Maan Tomu'
            },
            {
                id: 66,
                date: '6.12.2018',
                venue: "Henry's Pub",
                town: 'Helsinki',
                extra: 'Teemu & the Deathblows'
            },
            {
                id: 69,
                date: '8.2.2019',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'God Given Ass, Rokets, Dead Furies'
            },
            {
                id: 71,
                date: '9.3.2019',
                venue: 'Kultainen Kulaus',
                town: 'Helsinki',
                extra: 'Rokets, Kova Ajo, Dodge'
            },
            {
                id: 74,
                date: '16.3.2019',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Pölykuu, Nykyaika, Teini-Pää'
            },
            {
                id: 77,
                date: '5.4.2019',
                venue: 'Terassi Pub Yläkerta',
                town: 'Tampere',
                extra: 'Teini-Pää, Kot-Kat, Goo-Hags'
            },
            {
                id: 81,
                date: '17.5.2019',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Sir Liselot, Rokets, Goo-Hags'
            },
            {
                id: 81,
                date: '18.5.2019',
                venue: 'Jyväskylän meininki 2019 -piknik',
                town: 'Jyväskylä',
                extra: 'The Boasters, Suomen luonto, Nylon Beast, Varjot, Warchief'
            },
            {
                id: 86,
                date: '23.8.2019',
                venue: 'UUS HOI SIE',
                town: 'Lappeenranta',
                extra: 'Ilmaisjakelu'
            },
            {
                id: 87,
                date: '24.8.2019',
                venue: 'Kellarifest',
                town: 'Kuopio',
                extra: 'Florist, Terve Hulluus, Rakki-Sakke & Lahjomaton Miro, Lasten Hautausmaa Duo, Sister Disaster'
            },
            {
                id: 91,
                date: '18.10.2019',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'The Cavemen, The Mike Bell Cartel'
            },
            {
                id: 95,
                date: '1.11.2019',
                venue: 'Mestaritalli',
                town: 'Helsinki',
                extra: ''
            },
            {
                id: 100,
                date: '19.12.2019',
                venue: 'Kulttuuritalo Vernissa',
                town: 'Vantaa',
                extra: 'Räjäyttäjät, Nätti Antti ja Rattopojat'
            },
            {
                id: 101,
                date: '21.12.2019',
                venue: 'Ravintola Cactus',
                town: 'Helsinki',
                extra: 'The MES, Kiss Disease, (proto)Torvinen'
            }
        ]
    },
    teinipaa: {
        id: 6,
        title: 'Teini-Pää',
        routeName: 'band/teinipaa',
        items: [
            {
                id: 73,
                date: '16.3.2019',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Pölykuu, Nykyaika, Karkki & the Car Keys'
            },
            {
                id: 74,
                date: '5.4.2019',
                venue: 'Terassi Pub Yläkerta',
                town: 'Tampere',
                extra: 'Karkki & the Car Keys, Kot-Kat, Goo-Hags'
            },
            {
                id: 78,
                date: '6.4.2019',
                venue: 'Hullu Mylly',
                town: 'Vieremä',
                extra: 'Rokets'
            },
            {
                id: 79,
                date: '12.4.2019',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: '(proto)Torvinen, Linkopii'
            },
            {
                id: 80,
                date: '13.4.2019',
                venue: 'UUS HOI SIE',
                town: 'Lappeenranta',
                extra: 'Paikalliset, Linkopii'
            },
            {
                id: 82,
                date: '18.5.2019',
                venue: 'Joutomaafest x Pajafest',
                town: 'Kotka',
                extra: 'Alli Varpu, Dick Panama and the Hot Out, Marilyn Deloria, Paljas Elämä, Teresa Banks, Puoli Yhdeksän Uutiset, Sos/Siivoojat, Trash'
            },
            {
                id: 84,
                date: '1.6.2019',
                venue: 'Ravintola Cactus',
                town: 'Helsinki',
                extra: 'Valehtelijat, Nykyaika'
            },
            {
                id: 90,
                date: '12.10.2019',
                venue: 'Oranssi',
                town: 'Helsinki',
                extra: 'Lung, Tvärtom, Tamara Luonto'
            },
            {
                id: 93,
                date: '25.10.2019',
                venue: 'Kirjakahvila',
                town: 'Turku',
                extra: 'Roska, Zero Undo, Farah'
            },
            {
                id: 99,
                date: '7.12.2019',
                venue: 'Maunulatalo',
                town: 'Helsinki',
                extra: 'Fun, Varjot, Hero Dishonest, Tryer'
            },
            {
                id: 102,
                date: '31.12.2019',
                venue: 'Goosebumbs Records',
                town: 'Helsinki',
                extra: 'Jassen Kumivene, Return Without'
            },
            {
                id: 103,
                date: '3.1.2020',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'Tvärtom, Lokit'
            },
            {
                id: 105,
                date: '25.10.2020',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Ditches, Feral Young, Rats Will Feast'
            }
        ]
    },
    ketjukirjeet: {
        id: 7,
        title: 'Ketjukirjeet',
        routeName: 'band/ketjukirjeet',
        items: [
            {
                id: 85,
                date: '14.6.2019',
                venue: 'Kala',
                town: 'Astoria',
                extra: 'Bed Bits, Changeable Bulbs'
            }
        ]
    },
    heyday: {
        id: 8,
        title: 'Heyday',
        routeName: 'heyday',
        items: [
            {
                id: 88,
                date: '28.9.2019',
                venue: 'Terassi Pub Yläkerta',
                town: 'Tampere',
                extra: 'Lagrange Points, Torrances'
            },
            {
                id: 89,
                date: '5.10.2019',
                venue: 'Ravintola La Barre',
                town: 'Joensuu',
                extra: 'Rokets, Second-Hand Apes'
            },
            {
                id: 92,
                date: '24.10.2019',
                venue: 'Bar Loose',
                town: 'Helsinki',
                extra: 'The MES, Mellow Waves'
            },
            {
                id: 98,
                date: '29.11.2019',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Haleiwa, Phogg, Meal'
            },
            {
                id: 104,
                date: '11.1.2020',
                venue: 'Lepakkomies',
                town: 'Helsinki',
                extra: 'Linkopii, Ocelot, Future Box'
            }
        ]
    }
};

export default BAND_DATA;
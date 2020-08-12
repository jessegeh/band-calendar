const INITIAL_STATE = {
    sections: [{
        title: 'the everybody knowns',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/33995556_2046197835593019_5408772660836433920_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=IKDf07CruhcAX86mkqR&_nc_ht=scontent-hel2-1.xx&oh=a54f74e56fc6dc60928ef411d2c8151b&oe=5F59AD4C',
        id: 1,
        linkUrl: 'band/the%20everybody%20knows'
    },
    {
        title: 'karkki & the car keys',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/61029418_434854597246439_4100625274306035712_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=C2infVvh-7QAX9O3nMn&_nc_ht=scontent-hel2-1.xx&oh=7d5cb9163d92daadd6bd5ebe0e7e6fd2&oe=5F58C6D5',
        id: 2,
        linkUrl: 'band/karkki%20&%20the%20car%20keys'
    },
    {
        title: 'pete tnt band',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/30704788_420085601783593_8915062959177203712_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=OArmT_eQvtkAX-bukAZ&_nc_ht=scontent-hel2-1.xx&oh=31d55d3b13f8c2a16d118377a47841b7&oe=5F5951A4',
        id: 3,
        linkUrl: 'band/pete%20tnt%20band'
    },
    {
        title: 'teini-pää',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/69203869_691852597995918_9102791976775843840_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=WTgzrvJwt0YAX_lk2Jb&_nc_ht=scontent-hel2-1.xx&oh=7b60109359d6dee04b626298a2b57650&oe=5F581CF5',
        size: 'big',
        id: 4,
        linkUrl: 'band/teini-p%C3%A4%C3%A4'
    },
    {
        title: 'heyday',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/69220754_104013347643084_2429825344816021504_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=VCwGCIi6Ix4AX-y_e1v&_nc_ht=scontent-hel2-1.xx&oh=14164b9c69a4492c9e6e4317e730ee60&oe=5F59D4C4',
        size: 'big',
        id: 5,
        linkUrl: 'band/heyday'
    },
    {
        title: 'million beers',
        imageUrl: 'https://www.ilosaarirock.fi/2017/felamaa/wp-content/uploads/2017/07/llosaarirock.fi_2017_laiskat_million_beers_02_sampsa_geijer.jpg',
        id: 6,
        linkUrl: 'band/million%20beers'
    },
    {
        title: 'ketjukirjeet',
        imageUrl: 'https://cdn-az.allevents.in/banners/5cc9ac40-8ac2-11e9-b3f5-b16291e87cab-rimg-w526-h701-gmir.jpg',
        id: 7,
        linkUrl: 'band/ketjukirjeet'
    },
    {
        title: 'Pink Rat',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18278971_10211700763187198_5476127454371900219_o.jpg?_nc_cat=110&_nc_sid=b386c4&_nc_ohc=3tflfNGcq0QAX8hmKBh&_nc_ht=scontent-hel2-1.xx&_nc_tp=7&oh=85764fe55e82cbdbddf4eefb9ec332ce&oe=5F595E60',
        id: 8,
        linkUrl: 'band/pink%20rat'
    }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
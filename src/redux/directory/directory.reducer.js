const INITIAL_STATE = {
    sections: [{
        title: 'the everybody knowns',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/33995556_2046197835593019_5408772660836433920_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=WWw_t8EGg2MAX9cdA41&_nc_ht=scontent-hel2-1.xx&oh=60f01f64af62cb33ef4cf99fb1b4e046&oe=5F813A4C',
        id: 1,
        linkUrl: 'band/the%20everybody%20knows'
    },
    {
        title: 'karkki & the car keys',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/61029418_434854597246439_4100625274306035712_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=C0QYZKYBnIkAX_Hshc4&_nc_ht=scontent-hel2-1.xx&oh=6e36a1eb3b6a3b8e5915d288d3fc7266&oe=5F8053D5',
        id: 2,
        linkUrl: 'band/karkki%20&%20the%20car%20keys'
    },
    {
        title: 'pete tnt band',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/30704788_420085601783593_8915062959177203712_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=SP53TVKqt-UAX8l3asS&_nc_ht=scontent-hel2-1.xx&oh=656668c2af4afe3c9e16c85ea9830669&oe=5F80DEA4',
        id: 3,
        linkUrl: 'band/pete%20tnt%20band'
    },
    {
        title: 'teini-pää',
        imageUrl: 'https://teinipaa.com/static/media/teinip%C3%A4%C3%A4_b%C3%A4ndikuvat-iso-2.08dc59c3.jpg',
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
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18278971_10211700763187198_5476127454371900219_o.jpg?_nc_cat=110&_nc_sid=b386c4&_nc_ohc=gqeYzi_zXSQAX-bdF_k&_nc_ht=scontent-hel2-1.xx&tp=7&oh=edebac368d518563805c63c1e1a801c1&oe=5F80EB60',
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
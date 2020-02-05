const INITIAL_STATE = {
    sections: [{
        title: 'the everybody knowns',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/33995556_2046197835593019_5408772660836433920_o.jpg?_nc_cat=111&_nc_ohc=wXUXRW3cZLQAX9DGZ4V&_nc_ht=scontent-hel2-1.xx&oh=f680149f125a53cef1a2a1768b98d832&oe=5E921934',
        id: 1,
        linkUrl: 'band/the%20everybody%20knows'
    },
    {
        title: 'karkki & the car keys',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/61029418_434854597246439_4100625274306035712_n.jpg?_nc_cat=110&_nc_ohc=V0zKn-f_M5IAX8J0rkJ&_nc_ht=scontent-hel2-1.xx&oh=7913a9d09e29d46e03598f83abe02de4&oe=5E9EDD2B',
        id: 2,
        linkUrl: 'band/karkki%20&%20the%20car%20keys'
    },
    {
        title: 'pete tnt band',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/s960x960/48269231_2224703417815085_7501314434350972928_o.jpg?_nc_cat=109&_nc_ohc=uFzwwYOwHXAAX84wO_B&_nc_ht=scontent-hel2-1.xx&_nc_tp=1002&oh=93f516f528f238eef31a538fbc05442d&oe=5ECACEC4',
        id: 3,
        linkUrl: 'band/pete%20tnt%20band'
    },
    {
        title: 'teini-pää',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/69203869_691852597995918_9102791976775843840_o.jpg?_nc_cat=111&_nc_ohc=OgC73vFjHgMAX9BiBv8&_nc_ht=scontent-hel2-1.xx&oh=9d4b916aab4ce3f46f1754e86112e8e6&oe=5E979E0B',
        size: 'big',
        id: 4,
        linkUrl: 'band/teini-p%C3%A4%C3%A4'
    },
    {
        title: 'heyday',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/69220754_104013347643084_2429825344816021504_o.jpg?_nc_cat=100&_nc_ohc=W6D7KcflkD0AX9W7Ubu&_nc_ht=scontent-hel2-1.xx&oh=5ee6d74a65ac80f74f91683a10a96b87&oe=5EC950BC',
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
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t31.0-8/s960x960/22467305_10155029290603733_1327419439627308455_o.jpg?_nc_cat=110&_nc_ohc=qXGawM04FwEAX_IO9uY&_nc_ht=scontent-hel2-1.xx&oh=d50e931b74242f1698dd61096ad800d6&oe=5E96DD6E',
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
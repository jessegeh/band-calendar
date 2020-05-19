const INITIAL_STATE = {
    sections: [{
        title: 'the everybody knowns',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/33995556_2046197835593019_5408772660836433920_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=DgyEv3F7ewgAX8i3Wjh&_nc_ht=scontent-hel2-1.xx&oh=f48a9365a5f67f83d89e0a9f8059acd1&oe=5EEAEF4C',
        id: 1,
        linkUrl: 'band/the%20everybody%20knows'
    },
    {
        title: 'karkki & the car keys',
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/54416008_402206860511213_1536307405187448832_n.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=YZAK9Fg1kr8AX8hduWF&_nc_ht=scontent-hel2-1.xx&oh=98a7b74f585c7a07bb832ba7810b7c04&oe=5EEA6816',
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
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/69203869_691852597995918_9102791976775843840_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=35D6-oFFgmAAX-4qfTt&_nc_ht=scontent-hel2-1.xx&oh=8a3d19ef4e9e00064eb04c3a7d0626eb&oe=5EE95EF5',
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
        imageUrl: 'https://scontent-hel2-1.xx.fbcdn.net/v/t31.0-8/s960x960/18278971_10211700763187198_5476127454371900219_o.jpg?_nc_cat=110&_nc_sid=b386c4&_nc_ohc=XcwbkPHHJqoAX8WsdOU&_nc_ht=scontent-hel2-1.xx&_nc_tp=7&oh=a8dd26d15f4176a3bcbe75c70e989a41&oe=5EEAA060',
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
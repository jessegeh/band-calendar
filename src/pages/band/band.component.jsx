import React from 'react';

import BAND_DATA from './band.data.js';

import ShowList from '../../components/show-list/show-list';

class BandPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: BAND_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (<div className='band-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <ShowList key={id} {...otherCollectionProps} />
                ))
            }

        </div>);
    }
}

export default BandPage;
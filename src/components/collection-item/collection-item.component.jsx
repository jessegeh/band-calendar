import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
    const { date, venue, town, extra } = item;
    return (
        <div className='collection-item'>
            <div className='info'>
                <b>{date}</b>: {venue}, {town} (+{extra})
            </div>
        </div>
    );
};

export default connect()(CollectionItem);
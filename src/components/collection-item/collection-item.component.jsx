import React from 'react';

import './collection-item-styles-scss';

const CollectionItem = ({id, date, venue, town, extra}) => (
    <div className='collection-item'>
        <div className='info'>
            {venue}
        </div>
    </div>
)

export default CollectionItem;
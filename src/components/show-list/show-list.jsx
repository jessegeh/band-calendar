import React from 'react';

import './show-list.styles.scss';

const ShowList = ({ name, items }) => (
    <div className='showlist'>
        <h1 className='name'>{name.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .map((item) => (
                <div key={items.id}>{item.venue}</div>
            ))}
        </div>
    </div>
);

export default ShowList;
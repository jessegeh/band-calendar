import React from 'react';

import './show-list.styles.scss';

const ShowList = ({ title, items }) => (
    <div className='showlist'>
        <h1 className='name'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .map((item) => (
                <div key={items.id}>{item.date}: {item.venue} (+{item.extra})</div>
            ))}
        </div>
    </div>
);

export default ShowList;
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShowList from '../show-list/show-list';

import { selectCollections } from '../../redux/band/band.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <ShowList key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
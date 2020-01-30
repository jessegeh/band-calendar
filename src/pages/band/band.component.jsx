import React from 'react';
import { Route } from 'react-router-dom';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';

const BandPage = ({ match }) => {
    return (
        <div className='band-page'>
            {/* <Route exact={`${match.path}`} component={CollectionsOverview} /> */}
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

export default BandPage;
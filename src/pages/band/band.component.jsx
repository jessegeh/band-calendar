import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.components';

import { fetchCollectionsStartAsync } from '../../redux/band/band.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/band/band.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from '../collection/collection.component';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class BandPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;

        return (<div className='band-page'>
            {/* <Route exact={`${match.path}`}
                render={props => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )} /> */}
            <Route path={`${match.path}/:collectionId`}
                render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
        </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BandPage);
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/band/band.actions';

import CollectionPageContainer from '../collection/collection.container';


class BandPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;

        return (<div className='band-page'>
            {/* <Route exact={`${match.path}`}
                render={props => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )} /> */}
            <Route path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
                />
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });

export default connect(
    null,
    mapDispatchToProps
)(BandPage);
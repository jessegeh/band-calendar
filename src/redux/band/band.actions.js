import BandActionTypes from './band.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: BandActionTypes.FETCH_COLLECTIONS_START
  });
  
  export const fetchCollectionsSuccess = collectionsMap => ({
    type: BandActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  });
  
  export const fetchCollectionsFailure = errorMessage => ({
    type: BandActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  });
  
  export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
  
      collectionRef
        .get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
  };
  
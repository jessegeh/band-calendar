import BandActionTypes from './band.types';

export const updateCollections = (collectionsMap) => ({
    type: BandActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
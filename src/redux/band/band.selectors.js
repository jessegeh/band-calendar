import { createSelector } from 'reselect';

const selectBand = state => state.band;

export const selectCollections = createSelector(
  [selectBand],
  band => band.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ?  
    collections[collectionUrlParam] : null)
  );

  export const selectIsCollectionFetching = createSelector(
    [selectBand],
    band => band.isFetching
  );

  export const selectIsCollectionLoaded = createSelector(
    [selectBand],
    band => !!band.collections
  );
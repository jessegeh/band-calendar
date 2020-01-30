import { createSelector } from 'reselect';

const selectBand = state => state.band;

export const selectCollections = createSelector(
  [selectBand],
  band => band.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => 
    collections[collectionUrlParam]
  );
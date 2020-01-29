import BAND_DATA from './shop.data';

const INITIAL_STATE = {
  collections: BAND_DATA
};

const bandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bandReducer;
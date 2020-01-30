import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import bandReducer from './band/band.reducer.js';

export default combineReducers({
    user: userReducer,
    directory: directoryReducer,
    band: bandReducer
});
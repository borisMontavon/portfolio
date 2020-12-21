import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import translateReducer from './translateReducer';

const rootReducers = combineReducers({
    translateReducer,
    toastr: toastrReducer,
});

export default rootReducers;
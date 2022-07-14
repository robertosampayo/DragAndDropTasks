import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import moveReducer from './moveReducer';

export default combineReducers({
    data: listsReducer,
    action: moveReducer,

});
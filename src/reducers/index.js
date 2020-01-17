import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReduce from 'reducers/auth';

export default combineReducers({
    comments: commentsReducer,
    auth: authReduce
});
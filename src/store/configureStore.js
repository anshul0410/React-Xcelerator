import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import posts from '../data/posts';
import comments from '../data/comments';
var defaultState = {posts, comments};
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // defaultState,
        applyMiddleware(thunk)
    );
}

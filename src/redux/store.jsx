import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import queryReducer from './reducers.jsx';




const rootReducer = combineReducers({
  query: queryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

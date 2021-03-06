import {createStore, combineReducers} from 'redux';
import carsReducer from './cars';
import layoutReducer from './layout'

const rootReucer = combineReducers({
	cars : carsReducer,
	layout : layoutReducer
})

export default createStore(rootReucer);

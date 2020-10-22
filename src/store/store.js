import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var store = createStore(rootReducer,
  {currentVideo: exampleVideoData[0], videoList: exampleVideoData},
  applyMiddleware(thunk));

export default store;

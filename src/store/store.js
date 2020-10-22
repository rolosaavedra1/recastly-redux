import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
<<<<<<< HEAD
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, {
  videos: [],
  currentVideo: null,
  value: ''
}, applyMiddleware(thunk));

export default store;
=======
// This needs to have the following properties:
// videos
// currentVideo
// searchValue
>>>>>>> 0b527974bcf95513f33559a5f4a17c3722864a2d

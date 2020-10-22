import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';


//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

var rootReducer = combineReducers({
  currentvideo: currentVideoReducer,
  videoList: videoListReducer,
});

console.log(rootReducer);

export default rootReducer;

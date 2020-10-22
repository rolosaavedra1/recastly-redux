import { combineReducers } from 'redux';
<<<<<<< HEAD
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

=======
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
//will be invoked ALWAYS
var rootReducer = () => {};
>>>>>>> 0b527974bcf95513f33559a5f4a17c3722864a2d

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

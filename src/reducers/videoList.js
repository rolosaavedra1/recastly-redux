import Redux from 'redux';
<<<<<<< HEAD

var videoListReducer = (state = [], action) => {
=======
//will be invoked ALWAYS
var videoListReducer = (state = sampleData, action) => {
>>>>>>> 0b527974bcf95513f33559a5f4a17c3722864a2d
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;

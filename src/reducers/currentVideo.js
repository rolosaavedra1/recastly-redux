import Redux from 'redux';
<<<<<<< HEAD

var currentVideoReducer = (state = null, action) => {
=======
//will be invoked ALWAYS
var currentVideoReducer = (state, action) => {
>>>>>>> 0b527974bcf95513f33559a5f4a17c3722864a2d
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }
};

export default currentVideoReducer;

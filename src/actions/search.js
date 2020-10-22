import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
<<<<<<< HEAD
  //helper functions:

  //create an action object that modifies state.value

  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  searchYouTube(options, (videos) => {
    dispatch(changeVideoList(videos));
  });

  //TODO:  Write an asynchronous action to handle a video search!
  //if successful, invoke videoList action object creator
=======

  //TODO:  Write an asynchronous action to handle a video search!
  //we'll use thunk to return a function
>>>>>>> 0b527974bcf95513f33559a5f4a17c3722864a2d
};

export default handleVideoSearch;

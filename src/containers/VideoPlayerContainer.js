import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import handleVideoSearch from '../actions/search.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
var mapStateToProps = (state) => ({
  currentVideo: store.currentVideo
});

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;

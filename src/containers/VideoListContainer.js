import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


var mapStateToProps = (state) => ({
  videos: state.videoList
});

var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (videos) => dispatch(changeVideo(videos))
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;

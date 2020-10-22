import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import { connect } from 'react-redux';
//import search action creator
import SearchContainer from '../containers/SearchContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';

class App extends React.Component {
  //constructor(props) {
  //super(props);

  /*
    this.state = {
      videos: [],
      currentVideo: null
    }; */

  // this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  //}

  /*
  componentDidMount() {
    this.getYouTubeVideos('hydroflask');
  } */

  //handleVideoListEntryTitleClick(video) {
  //  this.setState({currentVideo: video});
  //}

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

  //   this.props.searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}


// const mapStateToProps = (state) => ({
//   videos: state.videos,
//   currentVideo: state.currentVideo,
//   value: state.value
// });

// const mapDispatchToProps = (dispatch) => {
//   // listener functions
//   return {
//     handleVideoListEntryTitleClick: (video) => dispatch(currentVideo(video)),
//     handleVideoSearch: (query) => handleVideoSearch(query)
//   };
// };

// const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);



export default App;

import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import { connect } from 'react-redux';
//import search action creator
import handleVideoSearch from 'src/actions/search.js';
import currentVideo from 'src/actions/currentVideo.js';


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
            <Search getYouTubeVideos={props.handleVideoSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  videos: state.videos,
  currentVideo: state.currentVideo,
  value: state.value
});

const mapDispatchToProps = (dispatch) => {
  // listener functions
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(currentVideo(video)),
    handleVideoSearch: (query) => handleVideoSearch(query)
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);



export default AppContainer;

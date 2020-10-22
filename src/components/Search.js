import React from 'react';



class Search extends React.Component {
  //constructor(props) {
  //  super(props);

  // this.state = {
  //   value: ''
  // };
  //}
  //should invoke a dispatch() for an action creator that changes the state.value
  //should send a CB to ap
  // handleInputChange(e) {
  //   //
  //   props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={props.state.value}
          onChange={() => props.handleSearchInputChange(value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;

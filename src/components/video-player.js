//Library imports
import React, {Component} from 'react';

class VideoPlayer extends Component {
  render() {
    if(!this.props.video) {
      return (<div> Loading.. </div>);
    }
    const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (
      <div>
        <iframe src={videoURL}/>
        <div>{this.props.video.snippet.title}</div>
        <div>{this.props.video.snippet.description}</div>
      </div>
    );
  }
}

export default VideoPlayer;

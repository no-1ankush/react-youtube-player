//Library imports
import React, {Component} from 'react';

class VideoPlayer extends Component {
  render() {

    //Handle Null Props.
    //There may be instance where the component is rendered
    //before the YouTube API call is complete.
    //escpically occurs on first load of the page.
    if(!this.props.video) {
      return (<div> Loading.. </div>);
    }

    //Generate link for the video object receiveds
    const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (
      <div>
        <iframe src={videoURL} title={this.props.video.snippet.title}/>
        <div>
          <strong> Title: </strong>
          {this.props.video.snippet.title}
        </div>
        <div>
          <strong> Description: </strong>
          {this.props.video.snippet.description}
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

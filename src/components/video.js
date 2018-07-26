//Library imports
import React, {Component} from 'react';

class Video extends Component {
  render() {
    return (
      <li>
        <img src={this.props.video.snippet.thumbnails.default.url} />
        <div>{this.props.video.snippet.title}</div>
      </li>
    );
  }
}

export default Video;

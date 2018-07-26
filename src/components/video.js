//Library imports
import React, {Component} from 'react';

class Video extends Component {
  render() {
    return (
      <li onClick={() => this.props.handleVideoSelection(this.props.video)} >
        <img
          src={this.props.video.snippet.thumbnails.default.url}
          alt={this.props.video.snippet.title}
        />
        <div>{this.props.video.snippet.title}</div>
      </li>
    );
  }
}

export default Video;

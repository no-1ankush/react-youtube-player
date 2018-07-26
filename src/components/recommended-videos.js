//Library imports
import React, {Component} from 'react';

//Component imports
import Video from './video'

class RecommendedVideos extends Component {
  render() {
    return (
      <ul>
        {this.props.videos.map(video => (
          <Video
            handleVideoSelection={this.props.handleVideoSelection}
            key={video.etag}
            video={video}
          />
        ))}
      </ul>
    );
  }
}

export default RecommendedVideos;

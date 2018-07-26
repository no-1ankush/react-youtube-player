//Library imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//Component imports
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search-bar';
import VideoPlayer from './components/video-player';
import RecommendedVideos from './components/recommended-videos'

//Constants
const YOUTUBE_API_KEY = 'AIzaSyAW7ur12ki2OI9IewLaVX95x2e0QQOyVpA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'Best Views Niagra Falls'}, responseData => {
      this.setState({
        videos: responseData,
        selectedVideo : responseData[0]
      });
    });

  }

  handleVideoSelection = selectedVideo => {
    this.setState({ selectedVideo });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer video={this.state.selectedVideo}  />
        <RecommendedVideos
          videos={this.state.videos}
          handleVideoSelection={this.handleVideoSelection}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

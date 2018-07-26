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

    this.handleVideoSearch('Best Views of Niagra Falls')
  }

  handleVideoSelection = selectedVideo => {
    this.setState({ selectedVideo });
  };

  handleVideoSearch = searchInput => {
    YTSearch({key: YOUTUBE_API_KEY, term: searchInput}, responseData => {
      this.setState({
        videos: responseData,
        selectedVideo : responseData[0]
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleVideoSearch={this.handleVideoSearch}
        />

        <VideoPlayer
          video={this.state.selectedVideo}
        />

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

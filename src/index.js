//Library imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//Component imports
import registerServiceWorker from './registerServiceWorker';
import AppHeader from './components/app-header';
import VideoPlayer from './components/video-player';
import RecommendedVideos from './components/recommended-videos'

//Constants
const YOUTUBE_API_KEY = 'AIzaSyAW7ur12ki2OI9IewLaVX95x2e0QQOyVpA';

class App extends Component {
  constructor(props) {
    super(props);

    //intialize an empty state at construction of the component
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //Make the inital YouTube Search with empty search input
    //to show the latest  videos instead of a blank page
    this.handleVideoSearch('')
  }

  handleVideoSelection = selectedVideo => {
    this.setState({ selectedVideo });
  };

  handleVideoSearch = searchInput => {

    //Make the YouTube API call to retrieve the 5 videos matching
    //the provided search input
    YTSearch({key: YOUTUBE_API_KEY, term: searchInput}, responseData => {
      this.setState({
        //store the response (contatining the videos in state)
        videos: responseData,
        //set the top result as the default selected video
        //for the video player
        selectedVideo : responseData[0]
      });
    });
  };

  render() {
    return (
      <div>
        {/*Adds the Application Header with the App Tile and Search Bar*/}
        <AppHeader
          handleVideoSearch={this.handleVideoSearch}
        />

        {/*Adds the Video Player*/}
        <VideoPlayer
          video={this.state.selectedVideo}
        />

        {/*Adds the Recommended Videos based of the search result*/}
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

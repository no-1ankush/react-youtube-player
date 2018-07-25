//Library imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//Component imports
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search-bar';

//Constants
const YOUTUBE_API_KEY = 'AIzaSyAW7ur12ki2OI9IewLaVX95x2e0QQOyVpA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'Search Youtube'}, responseData => {
      this.setState({videos: responseData});
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

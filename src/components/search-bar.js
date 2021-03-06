import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchInput: ''};
    this.handleVideoSearch = this.handleVideoSearch.bind(this);
  }

  handleVideoSearch (e) {
    this.setState({searchInput: e.target.value} );
    this.props.handleVideoSearch(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          id="search-bar"
          placeholder="Search"
          onChange={this.handleVideoSearch}
        />
      </div>
    )
  };
}

export default SearchBar;

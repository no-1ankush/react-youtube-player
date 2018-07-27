//Library imports
import React, {Component} from 'react';

//Material-UI Library imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//Component imports
import SearchBar from './search-bar';

class AppHeader extends Component {
  render() {
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React YouTube Player
            </Typography>
          </Toolbar>
        </AppBar>

        <SearchBar
          handleVideoSearch={this.props.handleVideoSearch}
        />
      </div>
    );
  }
}

export default AppHeader;

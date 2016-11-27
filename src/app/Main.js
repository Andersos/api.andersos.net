import React from 'react';
import {blue500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar'; // eslint-disable-line
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // eslint-disable-line
import Avatar from 'material-ui/Avatar'; // eslint-disable-line
import List from 'material-ui/List'; // eslint-disable-line
import ListItem from 'material-ui/List/ListItem'; // eslint-disable-line
import Subheader from 'material-ui/Subheader'; // eslint-disable-line

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500
  }
});

class Main extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <AppBar title='API' showMenuIconButton={false} />
      <List>
      <ListItem primaryText='🏃🏼 Activity' key='Activity' href='http://andersos.net/2016/04/17/3000000/' />
      <ListItem primaryText='🎲 Boardgames' key='Boardgames' href='http://boardgames.andersos.net' />
      <ListItem primaryText='📚 Books' key='Books' href='http://books.andersos.net' />
      <ListItem primaryText='🎬 Movies' key='Movies' href='https://www.imdb.com/user/ur27912633/ratings?start=1&sort=ratings_date:desc' />
      <ListItem primaryText='📺 Series' key='Series' href='http://series.andersos.net' />
      </List>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

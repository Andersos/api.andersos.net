import React from 'react';
import { blue500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500,
  },
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar title="API" showMenuIconButton={false} />
      <List>
        <ListItem
          primaryText="🏃🏼 Activity"
          key="Activity"
          href="http://andersos.net/2016/04/17/3000000/"
        />
        <ListItem
          primaryText="🎲 Boardgames"
          key="Boardgames"
          href="http://boardgames.andersos.net"
        />
        <ListItem primaryText="📚 Books" key="Books" href="http://books.andersos.net" />
        <ListItem
          primaryText="🎬 Movies"
          key="Movies"
          href="https://www.imdb.com/user/ur27912633/ratings?start=1&sort=ratings_date:desc"
        />
        <ListItem primaryText="📺 Series" key="Series" href="http://series.andersos.net" />
      </List>
    </div>
  </MuiThemeProvider>
);

export default Main;

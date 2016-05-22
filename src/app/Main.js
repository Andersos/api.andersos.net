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
      <ListItem primaryText='Activity (data)' key='Activity data' href='/activity.json' />
      <ListItem primaryText='Activity (dashboard)' key='Activity dash' href='http://andersos.net/2016/04/17/3000000/' />
      <ListItem primaryText='Boardgames (data)' key='Boardgames data' href='/boardgames.json' />
      <ListItem primaryText='Boardgames (dashboard)' key='Boardgames dash' href='http://boardgames.andersos.net' />
      <ListItem primaryText='Books (data)' key='Books data' href='/books.json' />
      <ListItem primaryText='Books (dashboard)' key='Books dash' href='http://books.andersos.net' />
      <ListItem primaryText='Podcasts (data)' key='Podcasts' href='/podcasts.json' />
      <ListItem primaryText='Series (data)' key='Series data' href='/series.json' />
      <ListItem primaryText='Series (dashboard)' key='Series dash' href='http://series.andersos.net' />
      </List>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

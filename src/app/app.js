import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';

injectTapEventPlugin();
/* eslint no-undef: 0 */
ReactDOM.render(<Main />, document.getElementById('app'));

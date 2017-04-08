import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';


import Dashboard from './components/dashboard';

const App = () => (
    <Dashboard/>
);

ReactDOM.render(<App />, document.getElementById('content'));
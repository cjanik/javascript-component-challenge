import React from 'react';
import { render as renderDOM } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// reducer
import { initialState, reducer } from './reducers/reducer.js'
// components
import SummaryManager from './components/SummaryManager.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
  }
  render() {
    return (
      <Provider store={this.store}>
        <SummaryManager />
      </Provider>
    );
  }
};

renderDOM(
  <App />,
  document.getElementById('app')
);

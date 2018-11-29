import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AppContainer from './src/app';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

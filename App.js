import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import App from './src/app/screens/Todos';

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

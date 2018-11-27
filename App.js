import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Todos from './src/app/screens/Todos';

const AppNavigator = createStackNavigator({
  Todos: Todos
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    )
  }
}

export default createAppContainer(App);

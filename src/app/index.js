import React from 'react';
import { createAppContainer } from 'react-navigation';
import StackNavigator from './screens';

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

import { createStackNavigator } from 'react-navigation';
import * as Routes from '../constants/routes';
import * as navigationOptions from './navigationOptions';
import Todos from './screens/Todos';
import Books from './screens/Books';

export default createStackNavigator(
  {
    [Routes.Books]: {
      screen: Books,
      navigationOptions: navigationOptions.Books
    },
    [Routes.Todos]: {
      screen: Todos,
      navigationOptions: navigationOptions.Todos
    }
  }, 
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000'
      }
    }
  }, 
  {
    initialRouteName: [Routes.Todos]
  } 
);

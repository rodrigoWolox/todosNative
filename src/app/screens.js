import { createStackNavigator } from 'react-navigation';
import * as Routes from '../constants/routes';
import * as navigationOptions from './navigationOptions';
import Todos from './screens/Todos';
import Books from './screens/Books';
import { black, white } from '../constants/colors';

export default createStackNavigator(
  {
    [Routes.Todos]: {
      screen: Todos,
      navigationOptions: navigationOptions.Todos
    },
    [Routes.Books]: {
      screen: Books,
      navigationOptions: navigationOptions.Books
    }
  }, 
  {
    defaultNavigationOptions: {
      headerTintColor: black,
      headerStyle: {
        backgroundColor: white
      }
    }
  } 
);

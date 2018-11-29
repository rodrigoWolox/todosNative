import { createStackNavigator } from 'react-navigation';
import * as Routes from '../constants/routes';
import * as navigationOptions from './navigationOptions';
import Details from './screens/Details';
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
    },
    [Routes.Details]: {
      screen: Details,
      navigationOptions: navigationOptions.Details
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

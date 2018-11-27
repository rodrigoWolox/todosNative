import Routes from '../constants/routes';
import navigationOptions from '';
import Todos from './screens/Todos';
import Books from './screens/Books';

export default StackNavigator(
  {
    [Routes.Todos]: {
      screen: Todos,
      navigationOptions: navigationOptions.Todos
    },
    [Routes.Books]: {
      screen: Books,
      navigationOptions: navigationOptions.Books
    }
  }
);

import { StyleSheet } from 'react-native';
import { white } from '../../../constants/colors';
import { largeSize } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignContent: 'space-between',
    justifyContent: 'center'
  },
  header: {
    fontSize: largeSize
  }
});

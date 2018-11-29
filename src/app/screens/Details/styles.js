import { StyleSheet } from 'react-native';
import { black, lightgrey } from '../../../constants/colors';
import { borderWidth } from '../../../constants/dimentions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 300/2,
    borderColor: black,
    borderWidth: borderWidth,
    height: 300,
    width: 300,
    backgroundColor: lightgrey
  },
  title: {

  },
  author: {

  }
});

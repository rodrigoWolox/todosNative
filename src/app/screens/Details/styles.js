import { StyleSheet } from 'react-native';
import { black, lightgrey } from '../../../constants/colors';
import { borderWidth, largeBookImg } from '../../../constants/dimentions';
import { extraLargeSize, largeSize } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'space-evenly'
  },
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: largeBookImg/2,
    borderColor: black,
    borderWidth: borderWidth,
    height: largeBookImg,
    width: largeBookImg,
    backgroundColor: lightgrey
  },
  title: {
    fontWeight: 'bold',
    fontSize: extraLargeSize,
    textAlign: 'center'
  },
  author: {
    fontSize: largeSize,
    textAlign: 'center'
  }
});

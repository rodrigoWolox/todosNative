import { StyleSheet } from 'react-native';
import { black, lightgrey } from '../../../../../../../constants/colors';
import { borderWidth, medPadding, miniBookImg } from '../../../../../../../constants/dimentions';

export default StyleSheet.create({
  book: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: medPadding
  },
  bookImage: {
    borderRadius: 100/2,
    borderColor: black,
    borderWidth: borderWidth,
    height: miniBookImg,
    width: miniBookImg,
    backgroundColor: lightgrey
  },
  bookTitle: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  bookAuthor: {
    textAlign: 'right'
  }
});

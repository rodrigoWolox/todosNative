import { StyleSheet } from 'react-native';
import { largeSize } from '../../../../../../../constants/fonts';
import { coral, white } from '../../../../../../../constants/colors';
import { marginLeft, medPadding } from '../../../../../../../constants/dimentions';

export default StyleSheet.create({
  remove: {
    color: coral,
    fontSize: largeSize,
    marginBottom: 2,
    marginLeft: marginLeft
  },
  rightSection: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  todo: {
    alignItems: 'center',
    borderBottomColor: white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: medPadding
  }
});

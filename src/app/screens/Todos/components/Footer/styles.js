import { StyleSheet } from 'react-native';
import { medPadding } from '../../../../../constants/dimentions';
import { coral } from '../../../../../constants/colors';
import { medSize } from '../../../../../constants/fonts';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    bottom: 0,
    paddingVertical: medPadding
  },
  remove: {
    color: coral,
    fontSize: medSize
  }
})

export default styles;

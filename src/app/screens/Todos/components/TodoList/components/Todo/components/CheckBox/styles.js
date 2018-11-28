import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    borderColor: colors.BLACK,
    borderRadius: 100/2
    borderWidth: dimentions.BORDER_WIDTH,
    height: dimentions.OUTER_CHECKBOX,
    justifyContent: 'center',
    width: dimentions.OUTER_CHECKBOX
  },
  inner: {
    backgroundColor: colors.BLACK,
    borderRadius: 80/2,
    height: dimentions.INNER_CHECKBOX,
    width: dimentions.INNER_CHECKBOX
  }
});

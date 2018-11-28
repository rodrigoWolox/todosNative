import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
  remove: {
    color: colors.INDIAN_RED,
    fontSize: fonts.LARGE_SIZE,
    marginBottom: 2,
    marginLeft: dimentions.MARGIN_LEFT
  },
  rightSection: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  todo: {
    alignItems: 'center',
    borderBottomColor: colors.WHITE_SMOKE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: dimentions.MED_PADDING
  }
});

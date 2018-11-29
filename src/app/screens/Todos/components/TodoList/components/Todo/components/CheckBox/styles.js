import { StyleSheet } from 'react-native';
import { 
  borderWidth, 
  outerCheckbox, 
  innerCheckbox 
} from '../../../../../../../../../constants/dimentions';
import { black } from '../../../../../../../../../constants/colors';

export default StyleSheet.create({
  box: {
    alignItems: 'center',
    borderColor: black,
    borderRadius: 100/2,
    borderWidth: borderWidth,
    height: outerCheckbox,
    justifyContent: 'center',
    width: outerCheckbox
  },
  inner: {
    backgroundColor: black,
    borderRadius: 80/2,
    height: innerCheckbox,
    width: innerCheckbox
  }
});

import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import { NavigationActions } from 'react-navigation';

const HeaderRight = ({ navigation }) => (
  <View>
    <Button
      title="Books ->"
      onPress={() => navigation.navigate('Books')}
    />
  </View>
);

export default HeaderRight;

//() => this.props.dispatch(NavigationActions.navigate({routeName: 'Books'}))

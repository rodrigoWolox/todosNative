import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const HeaderRight = () => (
  <View>
    {alert(JSON.stringify(this.props, null, 2))}
    <Button
      title="Books ->"
      onPress={() => this.props.navigation.navigate('Books')}
    />
  </View>
);

export default HeaderRight;

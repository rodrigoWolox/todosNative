import React from 'react';
import { View, Button } from 'react-native';

const HeaderRight = ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.navigate('Books')}
      title="Books ->"
    />
  </View>
);

export default HeaderRight;

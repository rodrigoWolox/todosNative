import React from 'react';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const HeaderRight = ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.navigate('Books')}
      title="Books ->"
    />
  </View>
);

export default connect()(HeaderRight);

//() => this.props.dispatch(NavigationActions.navigate({routeName: 'Books'}))

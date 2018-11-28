import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import { NavigationActions } from 'react-navigation';

class HeaderRight extends React.Component {
  openBookList = () => this.props.navigation.navigate('Books');

  render() {
    return (
      <View>
        <Button
          title="Books ->"
          onPress={this.openBookList}
        />
      </View>
    )
  }
}

export default HeaderRight;

//() => this.props.dispatch(NavigationActions.navigate({routeName: 'Books'}))

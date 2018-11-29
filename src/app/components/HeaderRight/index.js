import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../../../redux/books/actions';
import styles from './styles';

class HeaderRight extends React.Component {

  handlePress = () => {
    this.props.dispatch(actionCreator.getBooks());
    this.props.navigation.navigate('Books');
  }

  render() {
    return (
      <View style={styles.headerRight}>
        <Button
          title="Books ->"
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default connect()(HeaderRight);

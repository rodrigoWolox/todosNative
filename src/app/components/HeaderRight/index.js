import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../../../redux/books/actions';

class HeaderRight extends React.Component {

  handlePress = () => {
    this.props.dispatch(actionCreator.fetchBooks());
    this.props.dispatch(this.props.navigation.navigate('Books'))
  }

  render() {
    return (
      <View>
        <Button
          title="Books ->"
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default connect()(HeaderRight);

//() => this.props.dispatch(NavigationActions.navigate({routeName: 'Books'}))

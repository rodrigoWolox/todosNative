import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import CheckBox from './components/CheckBox';
import styles from './styles';

class Todo extends React.Component {
  remove = () => this.props.onRemove(this.props.id);
  
	render() {
		return (
			<View key={this.props.id} style={styles.todo}>
        <Text>{this.props.label}</Text>
        <View style={styles.rightSection}>
          <CheckBox
            isChecked={this.props.isChecked}
            onToggle={this.props.onToggle}
          />
          <TouchableOpacity onPress={this.remove}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
		)
	}
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  todo: PropTypes.object
}

export default Todo;

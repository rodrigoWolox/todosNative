import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './components/Checkbox';

class Todo extends React.Component {
  remove = () => this.props.onRemove(this.props.key);

	render() {
		return (
			<View key={key} style={itemStyle}>
        <Text>{this.props.todo.label}</Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={this.props.todo.isChecked}
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
  key: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isReuired,
  todo: PropTypes.object
}

export default Todo;

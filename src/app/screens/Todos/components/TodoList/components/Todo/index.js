import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './components/Checkbox';

class Todo extends React.Component {
  toggle = () => onToggle(this.props.key)


	render() {
		return (
			<View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={}
          />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
		)
	}
}

export default Todo;

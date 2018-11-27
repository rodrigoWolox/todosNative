import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native'
import styles from './styles';

class CheckBox extends React.Component {
	handleToggle = () => this.props.onToggle(this.props.id);
		
	render() {
		return (
			<TouchableOpacity onPress={this.handleToggle}>
			  <View style={styles.box}>
			    { this.props.isChecked && <View style={styles.inner} /> }
			  </View>
			</TouchableOpacity>
		)
	}
} 

CheckBox.propTypes = {
  id: PropTypes.number,
	isChecked: PropTypes.bool,
	onToggle: PropTypes.func
}

export default CheckBox;

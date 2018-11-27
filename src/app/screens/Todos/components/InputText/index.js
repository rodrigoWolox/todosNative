import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

class InputText extends React.Component {
  state = {
    text: ''
  }

  onChangeText = (text) => {
    this.setState({text})
  }

  onSubmitEditing = () => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({text: ''});
    };
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false}
      />
    )
  }
}

InputText.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};


export default InputText;

import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

class InputText extends React.Component {
  state = {
    text: ''
  }

  onChangeText = (text) => {
    this.setState({text})
  }

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return

    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        value={text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false}
      />
    )
  }
}

InputText.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string
};


export default InputText;

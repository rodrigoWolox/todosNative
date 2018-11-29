import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class Book extends React.Component {
  handlePress = () => {
    this.props.navigation.navigate(
      'Details', {
        author: this.props.author,
        imageUri: this.props.imageUri,
        title: this.props.title
      }
    );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View key={this.props.id} style={styles.book}>
          <Image source={{ uri: this.props.imageUri }} style={styles.bookImage} />
          <View style={styles.rightSection}>
            <Text style={styles.bookTitle}>{this.props.title}</Text>
            <Text style={styles.bookAuthor}>{this.props.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imagelUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default withNavigation(Book);

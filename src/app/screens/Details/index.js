import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Details = ({ author, imageUri, title }) => (
  <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </View>  
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  </View>
);

Details.propTypes = {
  author: PropTypes.string.isRequired,
  imagelUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
  author: props.navigation.state.params.author,
  imageUri: props.navigation.state.params.imageUri,
  title: props.navigation.state.params.title
});

export default connect(mapStateToProps)(Details);

import React from 'react';

import { ActivityIndicator } from 'react-native';

const withLoading = Component => props => (props.isLoading ? 
  <ActivityIndicator size='small' /> 
  : 
  <Component {...props} 
/>);

export default withLoading;

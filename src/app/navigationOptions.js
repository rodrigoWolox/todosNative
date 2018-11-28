import React from 'react';
import HeaderRight from './components/HeaderRight';

export function Todos({ navigation }) {
  return {
    title: 'Todo List',
    headerRight: <HeaderRight navigation={navigation} />,
  }
}

export function Books() {
  return {
    title: 'Book List'
  }
}
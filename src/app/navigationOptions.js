import React from 'react';
import HeaderRight from './components/HeaderRight';

export function Todos() {
  return {
    title: 'Todo List',
    headerRight: <HeaderRight />
  }
}

export function Books() {
  return {
    title: 'Book List'
  }
}
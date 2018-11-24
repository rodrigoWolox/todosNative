import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

class TodoList extends React.Component {
  renderTodo = (todo, i) => {
    return <Todo
      key={i} 
      todo={todo}
      onToggle={this.props.onToggle} 
      onRemove={this.props.onDelete}
    />
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {todos.map(this.renderTodo)}
      </ScrollView>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default TodoList;

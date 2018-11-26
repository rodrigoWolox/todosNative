import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Todo from './components/Todo';

import styles from './styles';

class TodoList extends React.Component {
  renderTodo = (todo, i) => {
    return (
      <Todo
        id={i}
        key={i}
        label={todo.label}
        isChecked={todo.isChecked}
        onToggle={this.props.onToggle} 
        onRemove={this.props.onDelete}
      />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.todos.map(this.renderTodo)}
      </ScrollView>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default TodoList;

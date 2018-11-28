import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Todo from './components/Todo';
import { todosPropType } from '../../../../../redux/todos/reducer';

import styles from './styles';

class TodoList extends React.Component {
  renderTodo = (todo, i) => {
    return (
      <Todo
        id={i}
        isChecked={todo.isChecked}
        key={i}
        label={todo.label}
        onToggle={this.props.onToggle} 
        onRemove={this.props.onDelete}
      />
    )
  }

  render() {
    return (
      <ScrollView>
        {this.props.todos.map(this.renderTodo)}
      </ScrollView>
    );
  }
}

TodoList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(todosPropType).isRequired
}

export default TodoList;

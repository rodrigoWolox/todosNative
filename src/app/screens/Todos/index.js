import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { actionCreator } from '../../../redux/todos/actions';
import { todosPropType } from '../../../redux/todos/reducer';
import Footer from './components/Footer';
import InputText from './components/InputText';
import TodoList from './components/TodoList';
import styles from './styles';

const Todos = ({ addTodo, removeCompleted, removeTodo,  todos, toggleTodo }) => (
  <View style={styles.container}>
    <InputText
      placeholder={'Enter a Todo!'}
      onSubmit={addTodo}
    />
    <View style={styles.divider}/>
    <TodoList
      todos={todos}
      onDelete={removeTodo}
      onToggle={toggleTodo}
    />
    <View style={styles.divider} />
    <Footer onRemoveCompleted={removeCompleted} />
  </View>
);

Todos.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(todosPropType).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapsStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: label => dispatch(actionCreator.addTodoAction(label)),
  toggleTodo: id => dispatch(actionCreator.toggleTodoAction(id)),
  removeCompleted: () => dispatch(actionCreator.removeCompletedAction()),
  removeTodo: id => dispatch(actionCreator.removeTodoAction(id))
});

export default connect(mapsStateToProps, mapDispatchToProps)(Todos);

wimport React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { actionCreator } from '../redux/todos/actions';
import Header from '../components/Header';
import InputText from './components/InputText';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import styles from './styles';

const Todos = ({ todos, addTodo, removeTodo, toggleTodo, removeCompleted }) => (
  <View style={styles.container}>
    <Header title="Todo List" />
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
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

const mapsStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(actionCreator.addTodoAction(todo)),
  removeTodo: id => dispatch(actionCreator.removeTodoAction(id)),
  toggleTodo: id => dispatch(actionCreator.toggleTodoAction(id)),
  removeCompleted: () => dispatch(actionCreator.removeCompletedAction())
});

export default connect(mapStateToProps, mapDispatchTtoProps)(App);

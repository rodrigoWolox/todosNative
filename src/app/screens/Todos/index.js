import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { actionCreator } from '../redux/todos/actions';
import Header from '../components/Header';
import InputText from './components/InputText';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import styles from './styles';

class Todos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Todo List" />
        <Input
          placeholder={'Enter a Todo!'}
          onSubmit={this.props.addTodo}
        />
        <View style={styles.divider}/>
        <TodoList
          todos={this.props.todos}
          onDelete={this.removeItem}
          onToggle={this.props.toggleTodo}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
}

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

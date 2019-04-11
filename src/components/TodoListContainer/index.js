import React, { Component } from 'react';
import TodoList from '../TodoList';
import { getTodos, toggleItem } from '../../reducers/todos/actions';
import { connect } from 'react-redux';

export class TodoContainer extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render = () => {
    return <div className="todoContainer">
      <TodoList todoItems={this.props.items} toggleItem={this.props.toggleItem} />
    </div>
  }
}

export const mapStateToProps = state => ({
  items: state.todos.items
})

export const mapDispatchToProps = {
  getTodos: () => getTodos(),
  toggleItem: () => toggleItem()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);


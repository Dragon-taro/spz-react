import TodoList from "./presentation";
import { connect } from "react-redux";
import { deleteTodo, putTodo } from "../../../redux/actions";
import { loadTodos } from "../../../redux/todos/effects";

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = dispatch => ({
  deleteTodo: todos => dispatch(deleteTodo(todos)),
  putTodo: todos => dispatch(putTodo(todos)),
  loadTodos: () => dispatch(loadTodos())
});

const mergeProps = (stateProps, dispatchProps) => {
  const { todos } = stateProps;
  const { deleteTodo, putTodo, loadTodos } = dispatchProps;

  return {
    handleDelete: id => {
      const _todos = todos.filter(t => t.id !== id);
      deleteTodo(_todos);
    },
    handleChange: id => {
      const _todos = todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      );
      putTodo(_todos);
    },
    loadTodos,
    todos
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoList);

export default TodoListContainer;

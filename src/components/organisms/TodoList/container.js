import TodoList from "./presentation";
import { connect } from "react-redux";
import { deleteTodo, putTodo } from "../../../redux/actions";

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = dispatch => ({
  deleteTodo: todos => dispatch(deleteTodo(todos)),
  putTodo: todos => dispatch(putTodo(todos))
});

const mergeProps = (stateProps, dispatchProps) => {
  const { todos } = stateProps;
  const { deleteTodo, putTodo } = dispatchProps;

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
    todos
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoList);

export default TodoListContainer;

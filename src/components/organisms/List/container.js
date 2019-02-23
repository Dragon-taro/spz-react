import List from "./presentation";
import { connect } from "react-redux";
import { deleteTodo, putTodo } from "../../../redux/actions";

const mapStateToProps = ({ todo }) => ({ todo });

const mapDispatchToProps = dispatch => ({
  deleteTodo: todos => dispatch(deleteTodo(todos)),
  putTodo: todos => dispatch(putTodo(todos))
});

const mergeProps = (stateProps, dispatchProps) => {
  const { todo } = stateProps;
  const { deleteTodo, putTodo } = dispatchProps;
  return {
    handleDelete: id => {
      const _todo = todo.filter(t => t.id !== id);
      deleteTodo(_todo);
    },
    handleChange: id => {
      const _todo = todos.map(t => (t.id === id ? { ...t, done: !t.done } : t));
      putTodo(_todo);
    },
    items: todo
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(List);

export default ListContainer;

import TodoList from "./presentation";
import { connect } from "react-redux";

const mapStateToProps = ({ todos }) => ({ todos });

const mergeProps = (stateProps, _, ownProps) => {
  const { todos } = stateProps;
  const { id } = ownProps;
  const todo = todos.find(t => t.id == id);

  return { todo };
};

const SingleTodoContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(TodoList);

export default SingleTodoContainer;

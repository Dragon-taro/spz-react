import AddTodo from "./presentation";
import { addTodo, changeValue } from "../../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = props => props;

const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(addTodo(item)),
  changeValue: value => dispatch(changeValue(value))
});

const mergeProps = (stateProps, dispatchProps) => {
  const { form, todos = [] } = stateProps;
  const { addTodo, changeValue } = dispatchProps;
  return {
    handleChange: e => {
      const _form = { ...form, [e.target.name]: e.target.value };
      changeValue(_form);
    },
    handleSubmit: () => {
      const id = todos.length + 1;
      const _todo = { id, ...form, done: false };
      addTodo(_todo);
      changeValue({ title: "", content: "" });
    },
    form
  };
};

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddTodo);

export default AddTodoContainer;

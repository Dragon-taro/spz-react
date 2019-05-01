import Form from "./presentation";
import { addTodo, changeValue } from "../../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = props => props;

const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(addTodo(item)),
  changeValue: value => dispatch(changeValue(value))
});

// mergePropsの書き方を統一したかった、、
const mergeProps = (stateProps, dispatchProps) => {
  const { form, todos = [] } = stateProps;
  const { addTodo, changeValue } = dispatchProps;
  return {
    handleChange: e => changeValue(e.target.value),
    handleSubmit: () => {
      const id = todos.length + 1;
      const _todo = { id, content: form, done: false };
      addTodo(_todo);
      changeValue("");
    },
    todos,
    form
  };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Form);

export default FormContainer;

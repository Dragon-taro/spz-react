import TodoList from "./presentation";
import { connect } from "react-redux";
import { deleteTodo, putTodo, loadTodos } from "../../../redux/actions";

// 必要なstateだけを取得
const mapStateToProps = ({ todos }) => ({ todos });

// 必要なactionだけを持ってきてdispatch用の関数を定義
const mapDispatchToProps = dispatch => ({
  deleteTodo: todos => dispatch(deleteTodo(todos)),
  putTodo: todos => dispatch(putTodo(todos)),
  loadTodos: () => dispatch(loadTodos())
});

// reduxからのstateと上で定義したdispatcherを受け取ってpresentationで使うpropsだけをにしてる
// handleChageなどのコールバックもここで定義するとpresentationはviewだけになって綺麗（これは好み）
const mergeProps = (stateProps, dispatchProps) => {
  const { todos } = stateProps;
  const { deleteTodo, putTodo, loadTodos } = dispatchProps;

  return {
    // idが一致するものだけを除外した新しいtodosをdispatch
    handleDelete: id => {
      // filterはtrueがreturnされた要素だけの配列を返す
      const _todos = todos.filter(t => t.id !== id);
      deleteTodo(_todos);
    },
    // idが一致する要素のdoneをtoggleした新しいtodosをdispatch
    handleChange: id => {
      // mapは各要素に処理を加えた新しい配列を返す
      const _todos = todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      );
      putTodo(_todos);
    },
    loadTodos, // => `loadTodos: loadTodos` と同じ意味
    todos
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TodoList);

export default TodoListContainer;

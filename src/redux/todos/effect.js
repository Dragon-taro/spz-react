import { loadTodosSuccess } from "./action";

// dispatchを実行する関数のpromiseを返す関数
// async関数を使っているためにpromiseを返す関数になっている
export const loadTodos = () => async dispatch => {
  const path = "/api/todos";
  const header = {
    "Content-type": "application/json"
  };

  // 本来はtry/catchでエラーハンドリング
  // プロミスが一つだけならcatchでエラーハンドリングしてしまうのもあり。
  const todos = await fetch(path, header)
    .then(res => res.json())
    .catch(err => console.error(err));

  dispatch(loadTodosSuccess(todos));
};

// 以下説明用のコードで使ってない

// アロー関数とasync/awaitなしで書いたバージョン
function loadTodosWithoutArrowFunctionAndAsync() {
  return function(dispatch) {
    const path = "/api/todos";
    const header = {
      "Content-type": "application/json"
    };

    fetch(path, header)
      .then(res => res.json())
      .then(todos => {
        dispatch(loadTodosSuccess(todos));
      })
      .catch(err => console.error(err));
  };
}

// もしtodoをpostしたりするなら、、
export const postTodo = () => async dispatch => {
  // postの処理
};
// ↑ みたいな感じで関数を追記していく（もちろん他のstateに関するものなら他のディレクトリに追記）

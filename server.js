const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/"));

// urlencodedとjsonは別々に初期化する
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// rewrite
app.get(/^(?!\/js|\/api).*$/, (req, res) => res.render("index"));

// bundle.jsの配信
app.use(express.static("static"));

// これ以下apiサーバー
// サーバーのデータはオンメモリで管理（ただの変数）

// 初期値
app.todo = [
  {
    id: 1,
    title: "hello world!",
    content: "init todo content",
    done: false
  }
];

// todoを全部返す
app.get("/api/todos", (req, res) => {
  res.json(app.todo);
});

// todoを追加
app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: app.todo.length + 1,
    done: false,
    ...req.body
  };
  app.todo = [...app.todo, newTodo];
  res.json(app.todo);
});

// todoの削除
app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  app.todo = app.todo.filter(t => t.id != id);
  res.json(app.todo);
});

// todoの更新
app.put("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  app.todo = app.todo.map(t => (t.id == id ? req.body : t));
  res.json(app.todo);
});

app.listen(port, function() {
  console.log(`server listen on port ${port}`);
});

import React, { useEffect } from "react";
import ListItem from "../../molecules/ListItem/index";
import styles from "./style.css";

const TodoList = ({ todos = [], loadTodos, ...options }) => {
  useEffect(() => {
    // 初期値がなかったらサーバーに取りに行く
    if (!todos.length) loadTodos();
  }, []);

  return (
    <ul className={styles.list}>
      {todos.map((item = {}, index) => (
        <ListItem key={item.id || index} {...options} {...item}>
          {item.title}
        </ListItem>
      ))}
    </ul>
  );
};

export default TodoList;

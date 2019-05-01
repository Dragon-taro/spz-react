import React from "react";
import ListItem from "../../molecules/ListItem/index";
import styles from "./style.css";

const TodoList = ({ todos = [], ...options }) => {
  return (
    <ul className={styles.list}>
      {todos.map((item = {}, index) => (
        <ListItem key={item.id || index} {...options} {...item}>
          {item.content}
        </ListItem>
      ))}
    </ul>
  );
};

export default TodoList;

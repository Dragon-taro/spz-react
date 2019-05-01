import React from "react";
import ListItem from "../../molecules/ListItem/index";
import styles from "./style.css";

const SingleTodo = ({ todo = {} }) => {
  return <div>{todo.content || "404 not found"}</div>;
};

export default SingleTodo;

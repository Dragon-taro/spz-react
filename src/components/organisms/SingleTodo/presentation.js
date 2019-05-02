import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";
import OneColumn from "../../atoms/OneColumn";

const SingleTodo = ({ todo = {} }) => {
  return (
    <OneColumn>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <Link to="/">{"< "}back</Link>
    </OneColumn>
  );
};

export default SingleTodo;

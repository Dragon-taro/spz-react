import React from "react";
import ListContainer from "../../organisms/TodoList/container";
import AddTodoContainer from "../../organisms/AddTodo/container";
import OneColumn from "../../atoms/OneColumn";

const Index = () => {
  return (
    <OneColumn>
      <h1>Todo App</h1>
      <AddTodoContainer />
      <ListContainer />
    </OneColumn>
  );
};

export default Index;

import React, { Fragment } from "react";
import SingleTodoContainer from "../../organisms/SingleTodo/container";

const Content = props => {
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <Fragment>
      <SingleTodoContainer id={id} />
    </Fragment>
  );
};

export default Content;

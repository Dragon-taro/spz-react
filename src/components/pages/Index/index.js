import React, { Fragment } from "react";
import ListContainer from "../../organisms/TodoList/container";
import FormContainer from "../../organisms/Form/container";

const Index = () => {
  return (
    <Fragment>
      <FormContainer />
      <ListContainer />
    </Fragment>
  );
};

export default Index;

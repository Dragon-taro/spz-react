import React, { Fragment } from "react";
import ListContainer from "../../organisms/List/container";
import FormContainer from "../../organisms/Form/container";

const AppTemplate = () => {
  return (
    <Fragment>
      <FormContainer />
      <ListContainer />
    </Fragment>
  );
};

export default AppTemplate;

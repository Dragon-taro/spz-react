import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../../redux/reducers";
import AppTemplate from "../../templates/AppTemplate/index";

const store = createStore(reducers);

const Application = () => {
  return (
    <Provider store={store}>
      <AppTemplate />
    </Provider>
  );
};

export default Application;

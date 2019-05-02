import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "../../../redux/reducers";
import Index from "../../pages/Index/index";
import Content from "../../pages/Content/index";

const store = createStore(reducers, applyMiddleware(thunk));
const history = createHistory();

const Application = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/todo/:id" component={Content} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default Application;

import React from "react";
import ReactDOM from "react-dom";
import Application from "./src/components/apps/Application/index";

class App extends React.Component {
  render() {
    return <Application />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import Application from "./src/components/pages/Application/index";

class App extends React.Component {
  render() {
    return <Application />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

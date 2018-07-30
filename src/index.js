import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.Fragment>
      <CssBaseline />
      <Switch>
        {routes.map((props, key) => <Route {...props} key={key} />)}
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);

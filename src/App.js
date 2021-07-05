import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";
import Fav from "./Fav";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route>
          <div
            style={{
              backgroundColor: "#FDD2BF",
              height: "50px",
              textAlign: "center",
              marginTop: "15px",
              fontSize: "15px",
            }}
          >
            <Link style={{ marginLeft: "50px" }} to="/">
              Main
            </Link>

            <Link style={{ marginLeft: "50px" }} to="/fav">
              Favorite
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/fav">
              <Fav />
            </Route>
          </Switch>
        </Route>
      </BrowserRouter>
    );
  }
}
export default App;

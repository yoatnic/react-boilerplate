import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Home {...this.props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

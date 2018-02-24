import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

const AppRouter = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

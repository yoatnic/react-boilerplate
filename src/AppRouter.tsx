import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" render={() => <Home {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

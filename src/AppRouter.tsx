import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const AppRouter = () => {
  const renderHome = (): any => <Home />;
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" render={renderHome} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

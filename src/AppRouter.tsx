import * as React from "react";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import Home from "./components/pages/Home";
import { StaticContext } from "react-router";

const AppRouter = (props: any) => {
  const renderHome = (): any => <Home {...props} />;
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" render={renderHome} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

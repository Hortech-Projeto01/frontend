import { useAuth } from "auth/context";
import PublicRoute from "auth/components/PublicRoute";
import LoginPage from "auth/pages/LoginPage";
import UrlRouter from "core/constants/UrlRouter";
import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

import history from "core/utils/history.js";

export default function MainRouter() {
  const auth = useAuth();

  return (
    <>
      <Router history={history}>
        <Switch>
          {/* TODO: Trocar por component Home */}
          <Route
            exact
            path={UrlRouter.root}
            render={() =>
              auth.isLogged ? (
                <Redirect to={UrlRouter.home} />
              ) : (
                <Redirect to={UrlRouter.auth.login} />
              )
            }
          />
          {/* Rotas de login */}
          <PublicRoute
            restricted={true}
            exact
            path={UrlRouter.auth.login}
            component={LoginPage}
          />
          <Route path={"*"}>
            <PrivateRoutes />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

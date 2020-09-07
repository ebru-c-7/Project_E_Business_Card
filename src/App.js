import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import useAuth from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/context";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

const Ecards = lazy(() => import("./cards/pages/ECards"));
const Home = lazy(() => import("./shared/pages/Home"));
const Auth = lazy(() => import("./people/pages/Auth"));

const App = () => {
  const { pId, token, logIn, logOut } = useAuth();
  let routes;

  routes = (
    <Switch>
      <Route path="/ecards">
        <Ecards />
      </Route>
      <Route path="/authenticate/:mode">
        <Auth />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        pId: pId,
        token: token,
        login: logIn,
        logout: logOut,
      }}
    >
      <BrowserRouter>
        <MainNavigation />
        <Suspense fallback={<h1>Loading…</h1>}>{routes}</Suspense>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import useAuth from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/context";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";

const EBCards = lazy(() => import("./cards/pages/EBCards"));
const Home = lazy(() => import("./shared/pages/Home"));
const Auth = lazy(() => import("./people/pages/Auth"));
const Portfolio = lazy(()=> import("./people/pages/Portfolio"));

const App = () => {
  const { pId, token, email, logIn, logOut, autoLogin } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/ebcards">
          <EBCards />
        </Route>
        <Route path="/my-portfolio">
          <Portfolio />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    autoLogin();
    routes = (
      <Switch>
        <Route path="/ebcards">
          <EBCards />
        </Route>
        <Route path="/people/authenticate/:mode">
          <Auth />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        pId: pId,
        token: token,
        email: email,
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

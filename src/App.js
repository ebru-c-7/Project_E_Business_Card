import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import useAuth from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/context";

import Navbar from "./shared/components/Navigation/Navbar";
import Intro from "./shared/components/Home/Intro";
import Footer from "./shared/components/Footer";

import "./App.css";

const EBCards = lazy(() => import("./cards/pages/EBCards"));
const Home = lazy(() => import("./shared/pages/Home"));
const Auth = lazy(() => import("./people/pages/Auth"));
const Portfolio = lazy(() => import("./people/pages/Portfolio"));

const App = () => {
  const { pId, token, email, logIn, logOut, autoLogin } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/ebcards">
          <Navbar />
          <EBCards />
        </Route>
        <Route path="/my-portfolio">
          <Navbar />
          <Portfolio />
        </Route>
        <Route path="/home">
          <Navbar>
            <Intro isLogin={!!token} />
          </Navbar>
          <Home isLogin={!!token} />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    autoLogin();
    routes = (
      <Switch>
        <Route path="/ebcards">
          <Navbar />
          <EBCards />
        </Route>
        <Route path="/people/authenticate/:mode">
          <Navbar />
          <Auth />
        </Route>
        <Route path="/home">
          <Navbar>
            <Intro />
          </Navbar>
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
        <Suspense
          fallback={
            <h1 style={{ color: "white", margin: "15px" }}>Loading…</h1>
          }
        >
          {routes}
          <Footer />
        </Suspense>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

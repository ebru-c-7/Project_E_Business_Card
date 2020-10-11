import { useState, useCallback, useEffect } from "react";

let logoutTimer;

const useAuth = () => {
  const [pId, setPId] = useState();
  const [token, setToken] = useState();
  const [email, setEmail] = useState();
  const [tokenExpiration, setTokenExpiration] = useState();

  const logIn = useCallback((person, pToken, email, tExpiration) => {
    setPId(person);
    setToken(pToken);
    setEmail(email);
    const after3Hours = new Date().getTime() + 1000 * 60 * 60 * 3;
    const expiration = tExpiration || new Date(after3Hours);
    setTokenExpiration(expiration);

    const data = {
      pId: person,
      token: pToken,
      email: email,
      expiration: expiration.toISOString(),
    };

    localStorage.setItem("EBCData", JSON.stringify(data));
  }, []);

  const logOut = useCallback(() => {
    setPId(null);
    setToken(null);
    setEmail(null);
    setTokenExpiration(null);
    localStorage.removeItem("EBCData");
  }, []);

  //to set or clear timeout
  useEffect(() => {
    if (token && tokenExpiration) {
      const timeLeft = tokenExpiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logOut, timeLeft);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpiration, logOut]);

  const autoLogin = useCallback(() => {
    const storedData = JSON.parse(localStorage.getItem("EBCData"));
    if (!storedData) return;

    const isValid = new Date(storedData.expiration) > new Date();
    if (storedData && storedData.token && isValid) {
      logIn(
        storedData.pId,
        storedData.token,
        storedData.email,
        new Date(storedData.expiration)
      );
    }
  }, [logIn]);

  return { pId, token, email, logIn, logOut, autoLogin };
};

export default useAuth;

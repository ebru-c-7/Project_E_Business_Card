import { useCallback, useState, useEffect } from "react";

const useCard = (initial) => {
  const [card, setCard] = useState({
    position: "",
    company: "",
    location: "",
    email: "",
    tel: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    logoImg: "",
    slogan: "",
  });

  useEffect(() => {
    setCard(initial);
  }, [initial]);

  const changeHandler = useCallback(
    (input, value) => {
      let newState = { ...card };
      newState[input] = value;
      setCard(newState);
    },
    [card]
  );

  const clearCard = useCallback(() => {
    setCard({
      position: "",
      company: "",
      location: "",
      email: "",
      tel: "",
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: "",
      logoImg: "",
      slogan: "",
    });
  }, []);

  return { card, changeHandler, clearCard };
};

export default useCard;

import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { AuthContext } from "./../../shared/context/context";

import EBCardList from "../components/EBCardList";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";
import useHttpt from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UI/ErrorModal";
import Search from "../components/Search";

import "../cards.css";

const EBCards = () => {
  const auth = useContext(AuthContext);

  const [loadedCards, setLoadedCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(null);
  const [favCards, setFavCards] = useState([]);

  const { isLoading, error, sendHttpRequest, clearError } = useHttpt();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const responseData = await sendHttpRequest(
          `http://localhost:5000/ebcards/` //only active cards
        );
        setLoadedCards(responseData.cards);
      } catch (err) {
        console.log(err);
      }
      if (auth.token) {
        setLoadedCards((prevCards) =>
          prevCards.filter((card) => card.creator.id !== auth.pId)
        ); 
        try {
          const responseData = await sendHttpRequest(
            `http://localhost:5000/people/${auth.pId}`
          );
          setFavCards(responseData.favcards.map((card) => card.id));
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchCards();
  }, [sendHttpRequest, auth]); 

  const searchHandler = (event, search) => {
    event.preventDefault();
    if (!search.keyword) return;
    let oldLoadedCards = [...loadedCards];
    let filteredCards = oldLoadedCards.filter((card) => {
      let regex = new RegExp(search.keyword.toLowerCase());
      let source =
        search.filter === "name"
          ? card.creator[search.filter].toLowerCase()
          : card[search.filter].toLowerCase();
      return regex.test(source);
    });
    setFilteredCards(filteredCards);
  };

  const clearFilterHandler = () => {
    setFilteredCards(null);
  };

  const addToFavHandler = async (ecid) => {
    if (!auth.token) return;
    try {
      let responseData = await sendHttpRequest(
        `http://localhost:5000/ebcards/favorites/${ecid}`,
        "POST",
        null, //body
        { Authorization: "Bearer " + auth.token } //header
      );
      let card = responseData.card;
      setFavCards((prevCards) => [...prevCards, card.id]); //only id info stored
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFavHandler = async (ecid) => {
    if (!auth.token) return;
    try {
      await sendHttpRequest(
        `http://localhost:5000/ebcards/favorites/${ecid}`,
        "DELETE",
        null, //body
        { Authorization: "Bearer " + auth.token } //header
      );
      setFavCards((prevCards) => prevCards.filter((cardId) => cardId !== ecid));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal show={!!error} onHide={clearError} errorMessage={error} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}

      {!isLoading && loadedCards && (
        <Container fluid style={{ position: "relative", top: "10vh" }}>
          <Row className="cardGap justify-content-center">
            <EBCardList
              favCards={favCards}
              cards={filteredCards || loadedCards}
              onAdd={addToFavHandler}
              onRemove={removeFromFavHandler}
            />
          </Row> 
        </Container>
      )}

      <Search
        search={searchHandler}
        loadedCards={loadedCards}
        clear={clearFilterHandler}
      />
    </React.Fragment>
  );
};

export default EBCards;

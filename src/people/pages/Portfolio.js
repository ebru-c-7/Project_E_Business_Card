import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import useHttp from "./../../shared/hooks/http-hook";
import { AuthContext } from "./../../shared/context/context";

import NewCardModal from "../../cards/components/NewCardModal";
import EBCardList from "../../cards/components/EBCardList";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";
import ErrorModal from "../../shared/UI/ErrorModal";

import "../people.css";

const Portfolio = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendHttpRequest, clearError } = useHttp();

  const [loadedCards, setLoadedCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  const [name, setName] = useState();

  const [card, setCard] = useState();
  const [showModal, setShowModal] = useState(false);
  const [changedCards, setChangedCards] = useState(false);

  const modalCloseHandler = () => {
    setShowModal(false);
    setCard();
  };
  const modalShowHandler = () => setShowModal(true);
  const changedCardsHandler = () => {
    let status = !changedCards;
    setChangedCards(status);
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const responseData = await sendHttpRequest(
          `${process.env.REACT_APP_BACKEND_URL}/people/${auth.pId}`
        );
        setLoadedCards(responseData.cards);
        setName(responseData.person.name);
        setFavCards(responseData.favcards);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCards();
  }, [sendHttpRequest, auth.pId, changedCards]);

  const cardEditHandler = async (ecid) => {
    try {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ebcards/${ecid}`
      );
      setCard(responseData.card);
      modalShowHandler();
    } catch (err) {
      console.log(err);
    }
  };

  const cardDeleteHandler = async (ecid) => {
    try {
      await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ebcards/${ecid}`,
        "DELETE",
        null, //body
        { Authorization: "Bearer " + auth.token }
      );
      setLoadedCards((prevCards) =>
        prevCards.filter((card) => card.id !== ecid)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const cardStatusChangeHandler = async (ecid) => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth.token,
    };

    try {
      await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ebcards/status/${ecid}`,
        "PATCH",
        null,
        headers
      );
      changedCardsHandler();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFavHandler = async (ecid) => {
    try {
      await sendHttpRequest(
        `${process.env.REACT_APP_BACKEND_URL}/ebcards/favorites/${ecid}`,
        "DELETE",
        null, //body
        { Authorization: "Bearer " + auth.token } //header
      );
      setFavCards((prevCards) => prevCards.filter((card) => card.id !== ecid));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal show={!!error} onHide={clearError} errorMessage={error} />

      <Container
        fluid
        style={{
          backgroundColor: "#e0dadae0",
          minHeight: "50vh",
          padding: "0px",
        }}
      >
        {isLoading ? (
          <div className="center">
            <LoadingSpinner asOverlay />
          </div>
        ) : loadedCards ? (
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  className="accordion-button"
                  variant="link"
                  eventKey="0"
                >
                  My Active Cards
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row className="justify-content-left" style={{margin: "0px 10px"}}>
                    <EBCardList
                      cards={loadedCards.filter((card) => card.active === true)}
                      onEdit={cardEditHandler}
                      onDelete={cardDeleteHandler}
                      onStatus={cardStatusChangeHandler}
                    />
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-button"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  My Passive Cards
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row className="justify-content-left" style={{margin: "0px 10px"}}>
                    <EBCardList
                      cards={loadedCards.filter(
                        (card) => card.active === false
                      )}
                      onStatus={cardStatusChangeHandler}
                      onDelete={cardDeleteHandler}
                    />
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="accordion-button"
                  as={Button}
                  variant="link"
                  eventKey="2"
                >
                  My Favorite Cards
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Row className="justify-content-left" style={{margin: "0px 10px"}}>
                    <EBCardList
                      cards={favCards.filter((card) => card.active === true)}
                      favCards={favCards.map((card) => card.id)}
                      onRemove={removeFromFavHandler}
                    />
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ) : null}
      </Container>

      <Button
        className="btn-new-card fixed-bottom-btn"
        onClick={modalShowHandler}
      >
        Add New Card
      </Button>
      <NewCardModal
        card={card}
        name={name}
        person={auth}
        show={showModal}
        onHide={modalCloseHandler}
        onSave={changedCardsHandler}
        ecid={card && card.id}
      />
    </React.Fragment>
  );
};

export default Portfolio;

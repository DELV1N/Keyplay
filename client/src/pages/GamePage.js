import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneGame } from "../http/gameAPI";

const GamePage = () => {
  const [game, setGame] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneGame(id).then((data) => setGame(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={350}
            height={200}
            src={process.env.REACT_APP_API_URL + game.cover}
          />
        </Col>
        <Col md={4}>
          <h2>{game.name}</h2>
          <h6>Лаунчер: {game.launcher}</h6>
          <h6>Жанр: {game.genre}</h6>
          <h6>Дата выхода: {String(game.date).substring(10, 0)}</h6>
        </Col>
        <Col md={4}>
          <h4>{game.price}₽</h4>
          <Button variant="outline-dark">Купить</Button>
        </Col>
      </Row>
      <Row>
        <h2>Характеристики</h2>
        {game.description}
      </Row>
    </Container>
  );
};

export default GamePage;

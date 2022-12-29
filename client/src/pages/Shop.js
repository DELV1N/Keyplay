import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import DeveloperBar from "../components/DeveloperBar";
import GameList from "../components/GameList";
import Pages from "../components/Pages";
import PublisherBar from "../components/PublisherBar";
import { fetchDevelopers, fetchGames, fetchPublishers } from "../http/gameAPI";

const Shop = observer(() => {
  const { game } = useContext(Context);

  useEffect(() => {
    fetchPublishers().then((data) => game.setPublisher(data));
    fetchDevelopers().then((data) => game.setDeveloper(data));
    fetchGames(
      game.selectedPublisher.id,
      game.selectedDeveloper.id,
      game.page,
      game.limit
    ).then((data) => {
      game.setGame(data.rows);
      game.setTotalCount(data.count);
    });
  }, [game.page, game.selectedPublisher, game.selectedDeveloper]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <PublisherBar />
        </Col>
        <Col md={9}>
          <DeveloperBar />
          <GameList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;

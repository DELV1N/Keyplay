import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateGame from "../components/modals/CreateGame";
import CreatePublisher from "../components/modals/CreatePublisher";
import CreateDeveloper from "../components/modals/CreateDeveloper";
import CreateKey from "../components/modals/CreateKey";

const Admin = () => {
  const [publisherVisible, setPublisherVisible] = useState(false);
  const [developerVisible, setDeveloperVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);
  const [keyVisible, setKeyVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setPublisherVisible(true)}
      >
        Добавить издателя
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setDeveloperVisible(true)}
      >
        Добавить разработчика
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setGameVisible(true)}
      >
        Добавить игру
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setKeyVisible(true)}
      >
        Добавить ключ
      </Button>
      <CreatePublisher
        show={publisherVisible}
        onHide={() => setPublisherVisible(false)}
      />
      <CreateDeveloper
        show={developerVisible}
        onHide={() => setDeveloperVisible(false)}
      />
      <CreateGame show={gameVisible} onHide={() => setGameVisible(false)} />
      <CreateKey show={keyVisible} onHide={() => setKeyVisible(false)} />
    </Container>
  );
};

export default Admin;

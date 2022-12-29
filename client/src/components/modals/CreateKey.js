import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createKey } from "../../http/keyAPI";

const CreateKey = ({ show, onHide }) => {
  const [key, setKey] = useState("");
  const [game, setGame] = useState(null);

  const addKey = () => {
    createKey({ keyStr: key, gameId: `${game}` }).then((data) => {
      setKey("");
      setGame(null);
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить ключ
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="mt-3"
            placeholder="Введите ключ"
          />
          <Form.Control
            value={game}
            onChange={(e) => setGame(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите id игры"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addKey}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateKey;

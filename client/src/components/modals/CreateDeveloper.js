import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createDeveloper } from "../../http/gameAPI";

const CreateDeveloper = ({ show, onHide }) => {
  const [name, setName] = useState("");

  const addDeveloper = () => {
    createDeveloper({ name: name }).then((data) => setName(""));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить разработчика
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название разработчика"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDeveloper}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDeveloper;

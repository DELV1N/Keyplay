import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createPublisher } from "../../http/gameAPI";

const CreatePublisher = ({ show, onHide }) => {
  const [name, setName] = useState("");

  const addPublisher = () => {
    createPublisher({ name: name }).then((data) => setName(""));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить издателя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название издателя"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addPublisher}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePublisher;

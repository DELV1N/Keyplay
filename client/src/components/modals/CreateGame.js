import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createGame } from "../../http/gameAPI";

const CreateGame = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [launcher, setLauncher] = useState("");
  const [publisher, setPublisher] = useState(null);
  const [developer, setDeveloper] = useState(null);
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addGame = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("date", `${date}`);
    formData.append("genre", genre);
    formData.append("launcher", launcher);
    formData.append("price", `${price}`);
    formData.append("cover", file);
    formData.append("publisherId", `${publisher}`);
    formData.append("developerId", `${developer}`);
    createGame(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить игру
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название игры"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость игры"
            type="number"
          />
          <Form.Control
            value={launcher}
            onChange={(e) => setLauncher(e.target.value)}
            className="mt-3"
            placeholder="Введите лаунчер игры"
          />
          <Form.Control
            value={publisher}
            onChange={(e) => setPublisher(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите id издателя"
          />
          <Form.Control
            value={developer}
            onChange={(e) => setDeveloper(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите id разработчика"
          />
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3"
            placeholder="Введите описание игры"
          />
          <Form.Control
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-3"
            placeholder="Введите жанр игры"
          />
          <Form.Control
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-3"
            placeholder="Введите дату выхода игры"
            type="date"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addGame}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateGame;

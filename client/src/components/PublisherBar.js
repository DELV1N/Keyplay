import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const PublisherBar = observer(() => {
  const { game } = useContext(Context);
  return (
    <ListGroup>
      {game.publishers.map((publisher) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={publisher.id === game.selectedPublisher.id}
          onClick={() => game.setSelectedPublisher(publisher)}
          key={publisher.id}
        >
          {publisher.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default PublisherBar;

import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { Context } from "../index";

const DeveloperBar = observer(() => {
  const { game } = useContext(Context);
  return (
    <Row md={5}>
      {game.developers.map((developer) => (
        <Card
          style={{ cursor: "pointer" }}
          key={developer.id}
          className="p-3"
          onClick={() => game.setSelectedDeveloper(developer)}
          border={
            developer.id === game.selectedDeveloper.id ? "danger" : "light"
          }
        >
          {developer.name}
        </Card>
      ))}
    </Row>
  );
});

export default DeveloperBar;

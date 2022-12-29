import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { GAME_ROUTE } from "../utils/consts";

const GameItem = ({ game }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(GAME_ROUTE + "/" + game.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={221}
          height={111}
          src={process.env.REACT_APP_API_URL + game.cover}
        />
        <div className="mt-1">
          <div>{game.name}</div>
          <div>{game.price}₽</div>
        </div>
      </Card>
    </Col>
  );
};

export default GameItem;

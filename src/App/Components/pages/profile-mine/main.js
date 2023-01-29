import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Colours } from "../../../../global-styles";
import { SelectButton } from "../../button";
import { useState } from "react";
import GridFollowing from "./grid-following";
import GridFollowers from "./grid-followers";
import { Link } from "react-router-dom";

const ProfileInfoElement = () => {
  const [clicked, setClicked] = useState([true, false, false]);

  const handleClick = (e) => {
    const itemIndex = e.target.attributes["data"].value;
    const newState = clicked.map((number, index) =>
      index == itemIndex ? (number = true) : (number = false)
    );
    setClicked(newState);
  };

  return (
    <main>
      <Container
        className="heading-spacer"
        style={{ height: "15rem" }}
      ></Container>
      <Container fluid style={{ backgroundColor: Colours.bgLightMode.medium }}>
        <Container style={{ maxWidth: "500px" }} className="py-5">
          <Row className="flex-md-row flex-column">
            <Col>
              <Link to="/profile/following">
                <SelectButton
                  state={clicked[0]}
                  onClick={handleClick}
                  data={0}
                  fullWidth
                >
                  Following (10)
                </SelectButton>
              </Link>
            </Col>
            <Col>
              <Link to="/profile/followers">
                <SelectButton
                  state={clicked[1]}
                  onClick={handleClick}
                  data={1}
                  fullWidth
                >
                  Followers (0)
                </SelectButton>
              </Link>
            </Col>
            <Col>
              <Link to="/profile/posts">
                <SelectButton
                  state={clicked[2]}
                  onClick={handleClick}
                  data={2}
                  fullWidth
                >
                  Posts
                </SelectButton>
              </Link>
            </Col>
          </Row>
        </Container>
        <GridFollowing state={clicked[0]} id="following" />
        <GridFollowers state={clicked[1]} id="followers" />
      </Container>
    </main>
  );
};

export default ProfileInfoElement;

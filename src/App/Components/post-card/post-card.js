import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CustomButton, { CommentButton } from "../button";
import RoundedImage from "../rounded-image/rounded-image";
import ModalContextPosts from "../../../context/ModalContextPosts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colours } from "../../../global-styles";

const { bgLightMode, bgDarkMode } = Colours;

const Footer = styled.footer`
  display: flex;
`;
const PostCard = ({ userData }) => {
  const [data, index] = userData;
  const { title, body, created, id, tags, _count, media, author } = data;
  const { avatar, name } = author;
  const [modalShowPost, setModalShowPost] = useContext(ModalContextPosts);
  const openPost = () => {
    setModalShowPost([true, "view"]);
  };
  return (
    <Card
      className="my-5"
      style={{ border: "none", backgroundColor: "transparent" }}
      key={index}
    >
      <Card.Title style={{ backgroundColor: "transparent" }} className="m-0">
        <h5 style={{ color: Colours.mediumDark }}>{name}</h5>
      </Card.Title>

      {media === "" ? (
        <div name="no-media"></div>
      ) : (
        <Card.Header
          variant="top"
          className="rounded p-0 mb-3"
          style={{ height: "20rem", boxShadow: bgLightMode.boxShadowSmall }}
        >
          <Card.Img
            src={media}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Card.Header>
      )}

      <Card.Body
        style={{
          border: "none",
          backgroundColor: `${bgLightMode.light}`,
          margin: "1rem 0 1rem 0",
          boxShadow: bgLightMode.boxShadowSmall,
        }}
        className="rounded mt-0"
      >
        <Row>
          <Col className={`d-flex justify-content-center align-items-center`}>
            <Link to={"/user?name=" + name}>
              <RoundedImage size={"6rem"} src={avatar} />
            </Link>
          </Col>

          <Col sm={9}>
            <h5 style={{ fontWeight: 600 }}>{title}</h5>
            <Card.Text>{body}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Footer>
        <div onClick={openPost}>
          <CustomButton primary>Read all</CustomButton>
          <CommentButton>{"Comments (0)"}</CommentButton>
        </div>
      </Footer>
    </Card>
  );
};

export default PostCard;

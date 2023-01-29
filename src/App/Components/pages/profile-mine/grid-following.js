import { Container, Row } from "react-bootstrap";
import CardProfileImage from "./Card-profile-images";

export default ({ state }) => {
  const display = state === true ? "d-block" : "d-none";

  return (
    <Container className={`${display}`} style={{ maxWidth: "1000px" }}>
      <Row className="w-100">
        <CardProfileImage id={1} />
        <CardProfileImage id={0} />
        <CardProfileImage id={111} />
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
      </Row>
    </Container>
  );
};

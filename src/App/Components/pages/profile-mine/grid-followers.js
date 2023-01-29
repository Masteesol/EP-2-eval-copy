import { Container, Row } from "react-bootstrap";
import CardProfileImage from "./Card-profile-images";

const gridProfiles = ({ state }) => {
  const display = state === true ? "d-block" : "d-none";
  return (
    <Container className={display} style={{ maxWidth: "1000px" }}>
      <Row className="w-100">
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
        <CardProfileImage />
      </Row>
    </Container>
  );
};

export default gridProfiles;

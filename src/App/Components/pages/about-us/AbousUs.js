import BannerLogo from "./logo-dark.png";
import Header from "./Header";
import Grid from "./grid";
import BottomImage from "./Bottom-image";
import { Colours } from "../../../../global-styles";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ModalContext from "../../../../context/ModalContextSettings";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  width: 100%;
  max-width: 500px;
  border-radius: 50px;
  border: solid 1px lightgray;
  &:hover {
    box-shadow: ${Colours.bgLightMode.boxShadow};
  }
  cursor: pointer;
`;

const AboutUs = () => {
  const [modalShow, setModalShow] = useContext(ModalContext);
  const [auth] = useContext(AuthContext);

  let displayProperty = "block";
  if (auth !== false) {
    displayProperty = "none";
  }
  const handleClick = () => {
    setModalShow(true);
  };
  return (
    <div
      className="content-body about-us"
      style={{ backgroundColor: Colours.bgLightMode.light }}
    >
      <Header>
        <img src={BannerLogo} alt="bannerlogo" />
      </Header>
      <main>
        <Container className="my-5" style={{ display: displayProperty }}>
          <h3 className="text-center" style={{ color: Colours.primary }}>
            Link Up today
          </h3>
          <Col className="d-flex justify-content-center mt-4">
            <LoginButton onClick={handleClick}>
              <h4 className="m-0">LOGIN</h4>
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{
                  fontSize: "1.5rem",
                  color: Colours.primary,
                  cursor: "pointer",
                  padding: "1rem",
                }}
              />
            </LoginButton>
          </Col>
        </Container>
        <Grid />
        <BottomImage />
      </main>
    </div>
  );
};

export default AboutUs;

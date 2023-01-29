import image from "./profile-image.jpg";
import { Col } from "react-bootstrap";
import RoundedImage from "../../rounded-image";
import { Colours } from "../../../../global-styles";
import styled from "styled-components";
import ScreenSize from "../../../../global-styles/display-sizes";
import { useContext } from "react";

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem;
  background-color: ${Colours.bgLightMode.light};
  transition: ease-in-out 0.1s;
  &:hover {
    box-shadow: ${Colours.bgLightMode.boxShadow};
  }
  @media ${ScreenSize.tablet} {
    flex-direction: column;
    box-shadow: none;
    background-color: transparent;
    &:hover {
      box-shadow: ${Colours.bgLightMode.boxShadow};
      background-color: ${Colours.bgLightMode.light};
    }
  }
`;

export default ({ id }) => {
  return (
    <Col md={3} className="my-3">
      <Inner>
        <RoundedImage src={image} size={"8rem"} />
        <h4 className="p-2" style={{ fontSize: "1.2rem" }}>
          Example name
        </h4>
      </Inner>
    </Col>
  );
};

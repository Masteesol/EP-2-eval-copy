import { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { SelectButton } from "../../button";
import ContentContext from "./context/ContentContext";

export default () => {
  const [clicked, setClicked] = useState([true, false]);
  const [selectedContent, setSelectedContent] = useContext(ContentContext);

  const handleClick = (e) => {
    const itemIndex = e.target.attributes["data"].value;
    const newState = clicked.map((number, index) =>
      index == itemIndex ? (number = true) : (number = false)
    );
    setClicked(newState);
    setSelectedContent(newState);
  };

  return (
    <Row className="flex-md-row flex-column">
      <Col>
        <SelectButton
          state={clicked[0]}
          onClick={handleClick}
          data={0}
          fullWidth
        >
          Latest
        </SelectButton>
      </Col>
      <Col>
        <SelectButton
          state={clicked[1]}
          onClick={handleClick}
          data={1}
          fullWidth
        >
          Followed
        </SelectButton>
      </Col>
    </Row>
  );
};

/**/

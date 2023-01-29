import React from "react";
import { Colours } from "../../../../global-styles";
import { Button, Form } from "react-bootstrap";
import ContentContext from "./context/ContentContext";
import { useContext } from "react";

const handleSearch = () => {};

export default () => {
  const [selectedContent] = useContext(ContentContext);
  let placeholder;
  const setPlaceholder = () => {
    selectedContent.forEach((item, index) => {
      if (item === true) {
        switch (index) {
          case 0:
            placeholder = "Search latest posts...";
            break;
          case 1:
            placeholder = "Search posts by followed users...";
            break;
          case 2:
            placeholder = "Enter username to find user...";
            break;
          default:
            break;
        }
      }
    });
  };
  setPlaceholder();
  return (
    <Form name="searc-field">
      <div className="d-flex" style={{ height: "3rem" }}>
        <div>
          <Button
            style={{
              backgroundColor: Colours.passive,
              border: 0,
              borderRadius: "5px 0px 0px 5px",
              height: "100%",
            }}
          >
            Search
          </Button>
        </div>
        <div style={{ flex: "1 1 0" }}>
          <Form.Group
            className="mb-3"
            controlId="search-bar"
            style={{ height: "100%" }}
          >
            <Form.Control
              type="text"
              placeholder={placeholder}
              style={{ borderRadius: "0px 5px 5px 0px", height: "100%" }}
            />
          </Form.Group>
        </div>
      </div>
    </Form>
  );
};

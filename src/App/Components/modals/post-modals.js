import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalContext from "../../../context/ModalContextPosts";
import { Form, Button } from "react-bootstrap";
import {
  modifyClassNames,
  selectElement,
} from "../../../utils/manage-elements";
import { publishPost } from "../../../utils/handle-form-submit";

export default function (props) {
  const [showModal] = useContext(ModalContext);
  const [wordCountOne, setWordCountOne] = useState(0);
  const [wordCountTwo, setWordCountTwo] = useState(0);
  const charCountLimit = {
    title: 30,
    body: 200,
  };
  const activateSaveButton = (e) => {
    const form = selectElement("#new-post-form");
    const [title, textArea] = form;
    const submitButton = form[4];
    const isValid = [title, textArea].filter((input) => {
      if (input.name === "title") {
        setWordCountOne(input.value.trim().length);
        if (
          input.value.length <= charCountLimit.title &&
          input.value.trim() !== ""
        ) {
          modifyClassNames(input, "border-success", "border-danger");
          return input;
        } else {
          modifyClassNames(input, "border-danger", "border-success");
        }
      }
      if (input.name === "body") {
        setWordCountTwo(input.value.trim().length);
        if (
          input.value.length <= charCountLimit.body &&
          input.value.trim() !== ""
        ) {
          modifyClassNames(input, "border-success", "border-danger");
          return input;
        } else {
          modifyClassNames(input, "border-danger", "border-success");
        }
      }
    });
    isValid.length === 2
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  };
  if (showModal[1] === "view") {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Full post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>Testing</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (showModal[1] === "write") {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="new-post-form" onSubmit={publishPost}>
            <Form.Group className="mb-3" controlId="newpostform.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                onKeyUp={activateSaveButton}
                type="text"
                placeholder="Your post title"
              />
              <Form.Text className="text-muted">
                Characters: <span id="text-count-1">{wordCountOne}</span> of{" "}
                {charCountLimit.title}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="newpostform.ControlTextarea1"
            >
              <Form.Label>Text</Form.Label>
              <Form.Control
                name="body"
                as="textarea"
                rows={3}
                onKeyUp={activateSaveButton}
              />
              <Form.Text className="text-muted">
                Characters: <span id="text-count-2">{wordCountTwo}</span> of{" "}
                {charCountLimit.body}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newpostform.ControlInput2">
              <Form.Label>Post image</Form.Label>
              <Form.Control
                name="media"
                type="text"
                placeholder="https://url-to-public-image.com"
              />
              <Form.Text className="text-muted">(Optional)</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newpostform.ControlInput3">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                placeholder="Cats, Cute, Fluffy"
              />
              <Form.Text className="text-muted">(optional)</Form.Text>
            </Form.Group>
            <Button disabled={true} type="submit">
              Publish
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

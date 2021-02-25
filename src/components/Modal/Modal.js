//make a modal drop down to give details of workout series
import React from "react";
import { Modal, Button } from "react-bootstrap";

function CardModal({ data, show, onClose }) {
  if (data == null) {
    return null;
  }

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Body>
        {console.log(data)}
        {data.description}
      </Modal.Body>
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
}
export default CardModal;

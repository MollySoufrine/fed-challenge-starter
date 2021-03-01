//make a modal drop down to give details of workout series
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";

function CardModal({ data, show, onClose }) {
  if (data == null) {
    return null;
  }

  return (
    <Modal className="modal" show={show} onClose={onClose}>
      <Modal.Body className="font">
        {console.log(data)}
        {data.headline}
        <br />
        {data.description}
      </Modal.Body>
      <Button className="modalBtn" onClick={onClose}>
        Close
      </Button>
    </Modal>
  );
}
export default CardModal;

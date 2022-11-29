import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";



import Modal from "react-bootstrap/Modal";

function ModalCheack({show, handleClose}) {

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmamos tu compra</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div><img className="w-25 mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" alt="" /></div> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCheack;

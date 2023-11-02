import { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';


export default function Openmodel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hellloooooooooooooo</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

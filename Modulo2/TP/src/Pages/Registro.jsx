import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Registro() {
  return (
    <div>
      <Card className="text-center w-75 mx-auto mt-3 ">
        <Card.Header>Form Registro</Card.Header>
        <Card.Body>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Surname"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          ></FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Confirm Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Registrarse</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Registro;

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Login(){
    return(
        <div>
      <Card className="text-center w-75 mx-auto mt-5 ">
        <Card.Header>Form Login</Card.Header>
        <Card.Body>

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
          


        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Ingresar</Button>
        </Card.Footer>
      </Card>
        </div>
    )
}

export default Login
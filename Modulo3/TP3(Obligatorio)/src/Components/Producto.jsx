import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Producto({ id, name, description, price, category_id, image }) {
  return (
    <div>
      <Card>
        <Card.Header></Card.Header>
        <div className="row">
          <div className="col">
            <Card.Img variant="top" src={image} style={{ width: 200 }} />
          </div>
          <div className="col">
            <Card.Body>
              <div style={{ textAlign: "left", fontSize: 20 }}>
                <Card.Text
                  variant="primary"
                  eventKey="3"
                  as={Link}
                  to={`/producto/${id}`}
                >
                  {name}
                </Card.Text>
              </div>
              <div style={{ textAlign: "left", fontSize: 20, paddingTop: 10 }}>
                <Card.Text>$ {price}</Card.Text>
                    
                <Button as={Link} to={`/producto/editar/${id}`} type="submit" variant="success">
                  Editar
                </Button>
              </div>

  
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Producto;

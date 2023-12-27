import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Producto({ id, title, category, price, category_id, thumbnail }) {
  return (
    <div>
      <Card >
      <Card.Header></Card.Header>
        <div className="row">
          <div className="col">
            <Card.Img variant="top" src={thumbnail} style={{ width: 80 }} />
          </div>
          <div className="col">
            <Card.Body>
              <div style={{ textAlign: "left", fontSize: 9 }}>
                <Card.Text
                  variant="primary"
                  eventKey="3"
                  as={Link}
                  to={`/producto/${id}`}
                >
                  {title}
                </Card.Text>
              </div>
              <div style={{ textAlign: "left",fontSize: 12, paddingTop:10 }}>
                <Card.Text>$ {price}</Card.Text>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Producto;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getByIdProductos } from "../Services/productosServices";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Loading from "../Components/Loading/Loading";
import Card from "react-bootstrap/Card";

function Detalle() {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const result = async () => {
      try {
        const productoData = await getByIdProductos(id);
        if (productoData.data) {
          //console.log(responseData.data)
          setProducto(productoData.data());
          //console.log(productoData.data())
        }

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };

    result();
  }, [id]);



  return (
    <Loading loading={isLoading}>

        <Card className="w-50 mx-auto">
          <Card.Header>{producto.name}</Card.Header>
          <div className="mx-auto">
            <Carousel style={{ width: "450px" }}>
              <Carousel.Item>
                <img
                  style={{ height: "800px" }}
                  className="cardpro d-block w-100 img-thumbnail"
                  src={producto.image}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "800px" }}
                  className="cardpro d-block w-100 img-thumbnail"
                  src={producto.image}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "800px" }}
                  className="cardpro d-block w-100 img-thumbnail"
                  src={producto.image}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
    
            <h3 className="col">Precio: $ {producto.price}</h3>

            <Button
              as={Link}
              to={`/producto/checkout/${id}`}
              variant="primary"
              size="lg"
              className="w-40 mx-auto m-5 "
            >
              Comprar
            </Button>
          
          <Card.Footer className="text-muted">SKU: {producto.sku}</Card.Footer>
        </Card>
     
    </Loading>
  );
}

export default Detalle;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getByIdProductos } from "../Services/productosServices";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

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
        }

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };

    result();
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  } else {
    console.log(producto);


    return (
      <div className="row">
        <Carousel style={{ width: "450px" }}>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={producto.image}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={producto.image}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={producto.image}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <p className="col">
          {" "}
          {producto.title}
          <h3 className="col">$ {producto.price}</h3>

          <Button variant="primary" size="lg">Comprar</Button>
        </p>
      </div>
    );
  }
}

export default Detalle;

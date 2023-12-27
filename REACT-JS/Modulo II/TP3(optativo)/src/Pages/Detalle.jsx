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
        const responseData = await getByIdProductos(id);
        if (responseData.data) {
          //console.log(responseData.data)
          setProducto(responseData.data);
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
    let imagenesProducto = producto.pictures.map((a) => a.url);
    console.log(imagenesProducto);

    const img1 = imagenesProducto[0];
    const img2 = imagenesProducto[1];
    const img3 = imagenesProducto[2];

    return (
      <div className="row">
        <Carousel style={{ width: "450px" }}>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={img2}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "350px" }}
              className="cardpro d-block w-100 img-thumbnail"
              src={img3}
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

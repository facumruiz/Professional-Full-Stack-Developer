import React, { useState, useEffect } from "react";
import { getAllProductos } from "../Services/productosServices";
import Producto from "./Producto";
import CardGroup from "react-bootstrap/CardGroup";
import Loading from "../Components/Loading/Loading";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const result = async () => {
      try {
        const productos = await getAllProductos();
        //console.log(productos);
        setProductos(productos);

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, []);

  return (
    <>
      <Loading loading={isLoading}>
          <CardGroup className="justify-content-center">
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                {...producto.data()}
                id={producto.id}
              />
            ))}
          </CardGroup>
      </Loading>
    </>
  );
}

export default Productos;

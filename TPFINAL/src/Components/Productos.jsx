import React, { useState, useEffect } from "react";
import { getAllProductos } from "../Services/productosServices";
import Producto from "./Producto";
import CardGroup from 'react-bootstrap/CardGroup';
import Loading from "../Components/Loading/Loading";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [search] = useState("");



  //metodo de filtrado 2

  const results = !search
    ? productos
    : productos.filter((data) => console.log(data));

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
      <Loading loading={isLoading} >
      <div>
          <CardGroup className="justify-content-center">
        {/*
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search"
            className="form-control w-75 mx-auto d-block"
          ></input>
    */}
        {results.map((producto) => (
          
              
      
          <Producto {...producto.data()} id={producto.id} />
        ))}
        </CardGroup>
      </div>
      </Loading>
    );
  
}

export default Productos;

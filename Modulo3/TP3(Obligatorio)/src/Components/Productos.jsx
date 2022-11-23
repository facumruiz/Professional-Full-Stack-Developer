import React, { useState, useEffect } from "react";
import { getAllProductos } from "../Services/productosServices";
import Producto from "./Producto";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [search, setSearch] = useState("");

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  };
  //metodo de filtrado 1
  /*  let results = []
   if(!search)
   {
       results = productos
   }else{
        results = users.filter( (dato) =>
        dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

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
  if (isLoading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
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
      </div>
    );
  }
}

export default Productos;

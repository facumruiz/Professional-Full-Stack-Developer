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
    console.log(e.target.value);
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

  const results = !search ? productos : productos.filter((data) => data.title.toLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(() => {
    const result = async () => {
      try {
        const responseData = await getAllProductos();
        console.log(responseData);
        setProductos(responseData.data.results);

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
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search"
          className="form-control w-75 mx-auto d-block"

        ></input>
        {results.map((producto) => (
          <Producto {...producto} />
        ))}
      </div>
    );
  }
}

export default Productos;

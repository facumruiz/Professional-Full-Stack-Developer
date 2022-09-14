import React, { Component } from "react";
import Cantidad from "./producto1/Cantidad";
import Descripcion from "./producto1/Descripcion";
import Foto from "./producto1/Fotoprod";
import NombreProducto from "./producto1/NombreProducto";
import Precio from "./producto1/Precio";
import SKU from "./producto1/SKU";

class Producto extends Component {
  render() {
    return (
      <>
        <Foto />
        <NombreProducto />
        <div>
          <Descripcion />
        </div>
        <div>
          <SKU />
          <Cantidad />
        </div>
        <Precio/>
        
      </>
    );
  }
}

export default Producto;

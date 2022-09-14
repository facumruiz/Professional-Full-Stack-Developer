import React, { Component } from "react";

import Producto from "./Producto";


class Home extends Component {
  render() /*componente*/ {
    return (

      <div>
        <Producto/>
      </div>
    );
  }
}

export default Home; //exporto para que uno use este componente

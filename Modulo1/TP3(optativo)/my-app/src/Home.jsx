import React, { Component } from "react";
import Banner from "./Banner";

class Home extends Component {
  render() /*componente*/ {
    const numero = 1;
    return (

      <div>
        Home
        {numero}
        <Banner></Banner>
      </div>
    );
  }
}

export default Home; //exporto para que uno use este componente

import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <>
        <form>
          <div>
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div>
            <label>Apellido</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Telefono</label>
            <input type="number" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Confirmar password</label>
            <input type="password" />
          </div>
        </form>
      </>
    );
  }
}

export default Form;

import React, { useState, useEffect } from "react";

function ContenidoFuncion() {
  const [texto, setTexto] = useState("");
  const numeroSKU = 6;
  const numeroStock = 10;
  useEffect(() => {
    console.log("componentDidMount - hook equivalente");
  }, []);

  useEffect(() => {
    console.log(
      "componentDidUpdate - hook equivalente - Solo si cambia el estado texto",
      texto
    );
  }, [texto]);

  return (
    <div>
      <table>
        <tr>
          <th colspan="2">Espinaca Knorr</th>
        </tr>
        <tr>
          <td className="imagen" rowSpan="2">
            <img
              src="https://www.knorr.com/content/dam/unilever/knorr_world/argentina/pack_shot/7794000006140.01-66568584-png.png.ulenscale.300x300.png"
              alt="Foto"
            />
          </td>
          <td>Espinaca Deshidratada 50g</td>
        </tr>
        <tr>
          <td>Precio: $200</td>
        </tr>
        <tr>
          <td>SKU: 1234</td>
          <td>Disponibles: 20</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button onClick={() => setTexto("Gracias por su compra")}>
              Comprar
            </button>{" "}
          </td>
        </tr>
      </table>

      <p> {texto} </p>
    </div>
  );
}
export default ContenidoFuncion;

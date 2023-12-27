import React, { useEffect } from "react";

function Producto({ country, newDeaths, newCases, infection }) {
  // console.log("props",props)
  // const {title,category,price} = props

  useEffect(() => {
    console.log("Se modifico title", country);
  }, [country]);

  return (
    <div>
      <table>
        <tr>
          <td>{country}</td>
          <td>{newDeaths}</td>
          <td>{newCases}</td>
          <td>{infection}</td>
        </tr>
      </table>
    </div>
  );
}

export default Producto;

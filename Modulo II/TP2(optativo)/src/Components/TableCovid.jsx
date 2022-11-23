import React, { useState, useEffect } from "react";
import Producto from "./DataCovid";

function Productos() {
  // const [titulo,setTitulo] = useState("Listado de productos")
  const titulo = "COVID 2022";
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const result = async () => {
      try {
        const url =
          "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "6f5bdf27d1msh68c8d8a12a5fae2p18d420jsn154579492fd5",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        };
        /*
          fetch(url, options)
            .then((res) => res.json())
            .then((responseData) => {
              console.log(responseData)
            })
            */
        const responseData = await fetch(url, options).then((res) =>
          res.json()
        );
        console.log(responseData);
        setData(responseData);
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
        <h1>{titulo}</h1>
        <table>
          <tr>
            <td>Country</td>
            <td>NewDeaths</td>
            <td>NewCases</td>
            <td>Infection Risk</td>
          </tr>
        </table>

        {data.map((doc) => (
          <Producto
            country={doc.Country}
            newDeaths={doc.NewDeaths}
            newCases={doc.NewCases}
            infection={doc.Infection_Risk}
          />
        ))}

      </div>
    );
  }
}

export default Productos;

import React, { useEffect } from "react";

function Producto({ title, category, price }) {
  // console.log("props",props)
  // const {title,category,price} = props

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <table className="tabla">


        <tr>
          <td>{title}</td>
          <td>$ {price}</td>
        </tr>

      </table>

    </div>
  );
}

export default Producto;

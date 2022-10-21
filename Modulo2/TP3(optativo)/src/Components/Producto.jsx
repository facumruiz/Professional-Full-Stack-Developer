import React from "react"
import { Link } from "react-router-dom"

function Producto({
  id,
  title,
  category,
  price,
  category_id,
  thumbnail
}){
  return (
      <div>
        <h2>{title}</h2>
        <img src={thumbnail}></img>
        <p>{category}</p>
        <p>{price}</p>
        <p>{category_id}</p>
        
        <button><Link to={`/producto/${id}`}>Ver Detalle</Link></button>
      </div>
  )
}

export default Producto

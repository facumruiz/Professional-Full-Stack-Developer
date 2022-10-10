import React,{useEffect} from "react"

function Producto({
  title,
  category,
  price
}){
  // console.log("props",props)
  // const {title,category,price} = props

  useEffect(
    ()=>{
      console.log("Se modifico title",title)
    },
    [title]
  )

  return (
      <div>
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <button>Ver Detalle</button>
      </div>
  )
}

export default Producto

import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productosServices"
import Producto from "./Producto"

function Productos(){
  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAllProductos()
          console.log(responseData)
          setProductos(responseData.data.results)

          setIsloading(false)
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    []
  )
  if(isLoading){
      return(
        <div>
          Cargando...
        </div>
      )
  }else{
    //console.log(productos.map(producto => console.log(producto)))
      return (
        <div>
          <h1>{titulo}</h1>
          {productos.map(producto =>  <Producto {...producto} />)}

        </div>
      )
  }   

}

export default Productos

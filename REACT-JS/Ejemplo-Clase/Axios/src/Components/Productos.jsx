import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productosServices"
import Producto from "./Producto"

function Productos(){
  // const [titulo,setTitulo] = useState("Listado de productos")
  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAllProductos()
          console.log(responseData.data)
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

  const filtrar = ()=>{
    setProductos([{
      id:3,
      title:"iPhone",
      price:2000,
      category:"Celulares" 
    }])
 }

 if(isLoading){
    return(
      <div>
        Cargando...
      </div>
    )
 }else{
    return (
      <div>
        <h1>{titulo}</h1>
        {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category} />)}
        <button onClick={filtrar}>Filtrar</button>
      </div>
    )
 }   

}

export default Productos

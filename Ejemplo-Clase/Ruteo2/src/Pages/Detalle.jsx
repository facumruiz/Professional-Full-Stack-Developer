import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    const {id} = useParams()
    
    const [producto,setProducto] = useState({})
    const [isLoading,setIsloading] = useState(true)

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const responseData = await getByIdProductos(id)
              if(responseData.data){
                setProducto(responseData.data)
              }
              
              setIsloading(false)
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
      )

    if(isLoading){
        return(
          <div>
            Cargando...
          </div>
        )
     }else{
        return (
          <div>
            <Link to="/">Inicio</Link>

            <h1>{producto.title}</h1>
            <img src={producto.thumbnail}></img>
            <p>{producto.price}</p>
            
          </div>
        )
     } 
    
}

export default Detalle
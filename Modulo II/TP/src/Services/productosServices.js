import instance from "../Config/axios"
export function getAllProductos(){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res)=>res.json())
    return instance.get("sites/MLA/search?q=placas-de-video")
}
export function getByIdProductos(id){
    return instance.get(`items/${id}`)
}
export function createProductos(){
    
}
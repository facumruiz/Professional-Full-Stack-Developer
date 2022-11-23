import { set } from "react-hook-form"
import instance from "../Config/axios"
import firebase from "../Config/firebase"
export async function  getAllProductos(){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res)=>res.json())
    //return instance.get(`sites/MLA/search?q=placas-de-video`)
    const querySnapshot = await firebase.firestore().collection("productos")
    .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    //return instance.get(`items/${id}`)
    const querySnapshot = await firebase.firestore().doc(`productos/${id}`).get()
    return querySnapshot
}
export function createProductos(){
    
}

export async function update(id, payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)

}
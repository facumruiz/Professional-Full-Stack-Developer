import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form,Container} from 'react-bootstrap'
import ButtonWithLoading from '../Components/ButtonWithLoading'
import FormGroup from '../Components/FormGroup'
function AgregarProductos({data}){
    const history = useHistory();
    const [form,setForm] = useState({name:'',description:'',sku:'', price:'', quantity:''})
    const [errors,setError] = useState({name:'',description:'',sku:'', price:'', quantity:''})
    const [loading,setLoading] = useState(false)
    console.log(form)
    const handleSubmit = (e)=>{
        console.log(form)
        if(form.name===""){
            setError({
                ...errors,
                name:'El nombre es obligatorio'
            })
        }
        setLoading(true)
        
        fetch("http://localhost:3001/productos",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                history.push("/")
                setLoading(false)
            },
            (error)=>{
                console.log(error)
                setLoading(false)
            }
        )
        e.preventDefault();
    }
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value}
        )
        e.preventDefault();
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup label={'Nombre'} type={'text'} placeholder={'Ingrese su nombre'} name={'name'} value={form.name} change={handleChange} errors={errors.name}/>
                
                <FormGroup label={'Description'} type={'text'} placeholder={'Ingrese su usuario'} name={'description'} value={form.description} change={handleChange}/>

                <FormGroup label={'Sku'} type={'password'} placeholder={'Ingrese su password'} name={'sku'} value={form.sku} change={handleChange}/>

                <FormGroup label={'Price'} type={'password'} placeholder={'Ingrese su password'} name={'price'} value={form.price} change={handleChange}/>

                <FormGroup label={'Quantity'} type={'password'} placeholder={'Ingrese su password'} name={'quantity'} value={form.quantity} change={handleChange}/>

                <ButtonWithLoading text={'Cargar Producto'} loading={loading} />
                
            </Form>
        </Container>
    )
}

export default AgregarProductos
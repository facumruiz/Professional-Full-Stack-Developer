import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form,Container} from 'react-bootstrap'
import ButtonWithLoading from '../Components/ButtonWithLoading'
import FormGroup from '../Components/FormGroup'
function Registro({data}){
    const history = useHistory();
    const [form,setForm] = useState({name:'',user:'',password:''})
    const [errors,setError] = useState({name:'',user:'',password:''})
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
        
        fetch("http://localhost:3001/usuarios/registro",{
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
                history.push("/registro")
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
                
                <FormGroup label={'Usuario'} type={'text'} placeholder={'Ingrese su usuario'} name={'user'} value={form.user} change={handleChange}/>

                <FormGroup label={'Contraseña'} type={'password'} placeholder={'Ingrese su password'} name={'password'} value={form.password} change={handleChange}/>

                <ButtonWithLoading text={'Registrarse'} loading={loading} />
                
            </Form>
        </Container>
    )
}

export default Registro
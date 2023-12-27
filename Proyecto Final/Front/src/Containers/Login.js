import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form,Container} from 'react-bootstrap'
import ButtonWithLoading from '../Components/ButtonWithLoading'
import FormGroup from '../Components/FormGroup'
function Login({login}){
    const history = useHistory();
    const [form,setForm] = useState({user:'',password:''})
    const [errors,setError] = useState({user:'',password:''})
    const [loading,setLoading] = useState(false)
    console.log(form)
    const handleSubmit = (e)=>{
        console.log(form)
       
        setLoading(true)
        
        fetch("http://localhost:3001/usuarios/login",{
            method:'POST',
            headers:{
                'content-type':'application/json'/*,
                'x-access-token':localStorage.getItem("token")*/
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                localStorage.setItem('token',result.token)
                login(true);
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
                <FormGroup label={'Usuario'} type={'text'} placeholder={'Ingrese su usuario'} name={'user'} value={form.user} change={handleChange}/>

                <FormGroup label={'Contraseña'} type={'password'} placeholder={'Ingrese su password'} name={'password'} value={form.password} change={handleChange}/>

                <ButtonWithLoading text={'Ingresar'} loading={loading} />
                
            </Form>
        </Container>
    )
}

export default Login
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import Login from './Containers/Login'
import Registro from './Containers/Registro'
import AgregarProductos from './Containers/agregarProductos';
import {BrowserRouter,Route} from "react-router-dom"
import Menu from './Layout/Menu'
import ProductoDetalle from './Containers/ProductoDetalle';

class App extends Component {
  constructor(){
      super()
      this.state = {
          titulo:"Home",
          opcionesMenu:[]
      }
      
  }
  componentDidMount(){
    if(localStorage.getItem("token")){
      this.modificarOpcionesMenu(true)
    }else{
      this.modificarOpcionesMenu(false)
    }
  }
  modificarOpcionesMenu = (login)=>{
    if(login){
      this.setState({
        opcionesMenu:[
        {
          "path":"/",
          "label":"Home"
        }
      ]})
    }else{
      this.setState({
        opcionesMenu:[
        {
          "path":"/",
          "label":"Home"
        },
        {
          "path":"/login",
          "label":"Login"
        },
        {
          "path":"/registro",
          "label":"Registro"
        }

      ]})
    }
  }
  cambiarTitulo = (e)=>{
      this.setState({
        titulo:"Inicio"
      })  
  }
  
  render(){
    return (
        <>
          <BrowserRouter>
            <Route component={()=><Menu data={this.state.opcionesMenu} loginProp={this.modificarOpcionesMenu}/>} />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={()=><Login login={this.modificarOpcionesMenu} />} />
            <Route path="/registro" exact component={Registro} />
            <Route path="/agregarProductos" exact component={AgregarProductos} />
            <Route path="/producto/:id" exact component={ProductoDetalle} />
          </BrowserRouter>
        </>
    );
  }
}

export default App;

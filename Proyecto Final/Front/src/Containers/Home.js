import React,{Component} from 'react'
import Producto from '../Components/Producto'
import {Container} from 'react-bootstrap'

class Home extends Component{
    constructor(){
        super()
        //Declarar el estado
        this.state = {
            productos:[],
            subtitulo:"Dsdas",
            loading:true
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/productos",{
            headers:{
                "x-access-token":localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                if(result.data){
                    this.setState({
                        productos:result.data,
                        loading:false
                    })
                }
            },
            (error)=>{
                console.log(error)
            }
        )
    }
    
    
    render(){
        return(
            <Container>
                
                {
                    this.state.loading &&
                    <div>Loading ...</div>
                }
                {
                    !this.state.loading &&
                    <div>
                        {this.state.productos.map(producto=><Producto data={producto} />)}
                    </div>
                }
                
                
                
            </Container>
        )
    }
}

export default Home
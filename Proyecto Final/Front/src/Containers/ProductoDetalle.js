import React,{Component,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import Producto from '../Components/Producto'
class ProductoDetalle extends Component{
    constructor(props){
        super(props)
        console.log(this.props.match.params.id)
        this.state = {
            producto:[],
            subtitulo:"Dsdas",
            loading:true
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/productos/"+this.props.match.params.id,{
            headers:{
                "x-access-token":localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                if(result){
                    this.setState({
                        producto:result,
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
        if(localStorage.getItem("token")){
            return(
                <Container>
                    
                {
                    this.state.loading &&
                    <div>Loading ...</div>
                }
                {
                    !this.state.loading &&
                    <div>
                        <Producto data={this.state.producto} verDetalle={false} />
                    </div>
                }
                
                
                
            </Container>
            )
        } else{
            return(
                <Container>
                    
                    Debe estar logueado
                    
                    
                    
                </Container>
            )
        }
        
    }
}

export default ProductoDetalle
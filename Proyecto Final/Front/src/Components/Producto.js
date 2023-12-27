import React from 'react';
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Producto(props){
    const verDetalle = (props.verDetalle!==false?true:false)
    return(
        
        <Card style={{ margin:'auto',marginBottom:'10px'}}>
         <Card.Body>
            <Card.Img style={{ width: '200px' }} variant="top"  />
            <Card.Title>{props.data.name}</Card.Title>
            {
                verDetalle &&
                <Link to={"/producto/"+props.data._id}>Ver producto</Link>
            }
            
            
            
            
        </Card.Body>
        </Card>
    )
}

export default Producto
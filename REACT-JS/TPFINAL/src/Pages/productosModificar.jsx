import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { deleteProducto, getByIdProductos, update } from "../Services/productosServices";
import { useEffect, useState } from "react";
import ModalDelete from "../Components/Modals/ModalDelete";
import AlertCustom from "../Components/Alerts/AlertCustom";
import {useNavigate} from "react-router-dom"



function ProductosModificar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [alert, setAlert] = useState({variant:'', text:''})
  const { id } = useParams();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const result = async () => {
      try {
        const productoData = await getByIdProductos(id);
        if (productoData.data) {
          setValue("name", productoData.data().name);
          setValue("price", productoData.data().price);
          setValue("description", productoData.data().description);
          setValue("image", productoData.data().image);
          setValue("sku", productoData.data().sku);
        }

      } catch (e) {
        console.log(e);
      }
    };

    result();
  },

  // eslint-disable-next-line
  [id]);

  const onSubmit = async (data) => {

    try {
      await update(id, data);
      setAlert({variant:'success', text:'Producto modificado con exito'})
      setTimeout(()=>{
        navigate("/")
      },1000)
    } catch (e) {
      console.log(e);
      setAlert({variant:'danger', text:'error'})
    }
  };

  const handleDelete = async() =>{
    setShow(true);
    try{
      await deleteProducto(id)
      setAlert({variant:'success', text:'Producto eliminado con exito'})
      setTimeout(()=>{
        navigate("/")
      },1000)
    }catch(e){
      console.log(e)
      setAlert({variant:'success', text:'Error'})
    }


  }

  return (
    <div>
      
      <Card className="text-center w-75 mx-auto mt-5 ">
        <Card.Header>Form Alta</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("name", { required: true })}
              />
              <Form.Text className="text-muted">
                {errors.name && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("price", { required: true })}
              />
              <Form.Text className="text-muted">
                {errors.price && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("description", { required: true })}
              />
              <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("image", { required: true })}
              />
              <Form.Text className="text-muted">
                {errors.image && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
            <FloatingLabel label="Sku">
              <Form.Control
                type="text"
                placeholder="Ingresar sku"
                {...register("sku", { required: true })}
              />
              </FloatingLabel>
              <Form.Text className="text-muted">
                {errors.image && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary" >
              Guardar
            </Button>
            <Button variant="danger" onClick={handleDelete} >Eleminar</Button>
            <ModalDelete show={show} handleClose={handleClose}/>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <AlertCustom {...alert} />
        </Card.Footer>
      </Card>
    </div>
  );
}
export default ProductosModificar;

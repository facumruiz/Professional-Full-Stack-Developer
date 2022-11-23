import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { getByIdProductos, update } from "../Services/productosServices";
import { useEffect, useState } from "react";

function ProductosModificar() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setIsloading] = useState(true);
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
        }

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };

    result();
  }, [id]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await update(id, data);
      console.log(document);
    } catch (e) {
      console.log(e);
    }
  };

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

            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductosModificar;

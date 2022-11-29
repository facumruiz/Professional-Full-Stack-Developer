import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ModalAlta from "../Components/Modals/ModalAlta";
import { useState } from "react";

function ProductosAlta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const document = await firebase
        .firestore()
        .collection("productos")
        .add(data);
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
            <Form.Group className="mb-3">
              <FloatingLabel label="Nombre">
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  {...register("name", { required: true })}
                />
              </FloatingLabel>
              <Form.Text className="text-muted">
                {errors.name && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel label="Precio">
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  {...register("price", { required: true })}
                />
              </FloatingLabel>
              <Form.Text className="text-muted">
                {errors.price && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
            <FloatingLabel label="Descripcion">
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("description", { required: true })}
              />
              </FloatingLabel>
              <Form.Text className="text-muted">
                {errors.description && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
            <FloatingLabel label="Imagen">
              <Form.Control
                type="text"
                placeholder="Ingresar nombre"
                {...register("image", { required: true })}
              />
              </FloatingLabel>
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

            <Button type="submit" variant="primary" onClick={handleShow}>
              Guardar
            </Button>
            <ModalAlta show={show} handleClose={handleClose} />
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductosAlta;

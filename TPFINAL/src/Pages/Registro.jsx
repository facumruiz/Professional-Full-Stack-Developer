import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseUser = await firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("responseUser", responseUser.user.uid);
      if (responseUser.user.uid) {
        const document = await firebase.firestore().collection("usuarios").add({
          name: data.name,
          lastname: data.lastname,
          userId: responseUser.user.uid,
        });
        console.log(document);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Card className="text-center w-75 mx-auto mt-5 ">
        <Card.Header>Form Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingPassword"
                label="Ingresar nombre"
              >
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingPassword"
                label="Ingresar apellido"
              >
                <Form.Control
                  type="text"
                  placeholder="Ingresar apellido"
                  {...register("lastname")}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel
                controlId="floatingPassword"
                label="Ingresar email"
              >
                <Form.Control
                  type="email"
                  placeholder="Ingresar email"
                  {...register("email", { required: true })}
                />
              </FloatingLabel>

              <Form.Text className="text-muted">
                {errors.email && <span>This field is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </FloatingLabel>

              <Form.Text className="text-muted">
                {errors.password?.type === "required" && (
                  <span>This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Debe colocar al menos 6 caracteres</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span>No puede superar 12 caracteres</span>
                )}
              </Form.Text>
            </Form.Group>

            <Button type="submit" variant="primary">
              Registrarse
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Registro;

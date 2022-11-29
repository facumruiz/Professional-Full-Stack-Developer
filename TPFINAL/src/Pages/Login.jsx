import FloatingLabel from "react-bootstrap/FloatingLabel";
import firebase from "../Config/firebase";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("responseUser", responseUser.user.uid);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Card className="text-center w-75 mx-auto mt-5 ">
        <Card.Header>Form Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
                controlId="floatingPassword"
                label="Ingresar mail"
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
    
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
              >
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
              Ingresar
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default Login;

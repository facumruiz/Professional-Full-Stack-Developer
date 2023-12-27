import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getByIdProductos } from "../Services/productosServices";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ModalCheack from "../Components/Modals/ModalCheack";


function Checkout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const result = async () => {
      try {
        const productoData = await getByIdProductos(id);
        if (productoData.data) {
          //console.log(responseData.data)
          setProducto(productoData.data());
        }

        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };

    result();
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  } else {
    console.log(producto);

    return (
      <div className="row">
        <h3 className="col"> {producto.name}</h3>
        <h3 className="col"> {producto.description}</h3>
        <h3 className="col">PRECIO FINAL: $ {producto.price}</h3>
        <h3 className="col">
          <Button type="submit" variant="success" onClick={handleShow}>
            Confirmar Compra
          </Button>
        </h3>
        <ModalCheack show={show} handleClose={handleClose} />
      </div>
    );
  }
}

export default Checkout;

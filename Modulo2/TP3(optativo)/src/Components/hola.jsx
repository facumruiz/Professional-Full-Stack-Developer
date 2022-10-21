import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        style={{
          height: 400,
        }}
          className="d-block w-100 img-thumbnail"
          
          src=""
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{
          height: 400,

          

        }}
          className="d-block w-100 img-thumbnail"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
import React from "react";
import Productos from "../Components/Productos";

const src =
  "https://firebasestorage.googleapis.com/v0/b/react-utn2022.appspot.com/o/y2mate.com%20-%20Nuevo%20motorola%20edge%2030%20ultra%20La%20resoluci%C3%B3n%20m%C3%A1s%20alta_1080p.mp4.mp4?alt=media&token=982b4dc4-63d9-4ac9-89e9-4eb1da5a3374";
function Home() {
  //console.log(firebase);
  return (
    <>
      <video className="mb-5" width="100%" autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <Productos  />
    </>
  );
}

export default Home;

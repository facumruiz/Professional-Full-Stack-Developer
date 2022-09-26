import logo from './logo.svg';
import './App.css';
import Home from './Home'; // llamo a mi componente Home (SIN .)

//PARTE 1

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    //uso Home en pseudocomponente
    <div className='App'>
      <Home></Home>
    </div>
        
  );
}



export default App;

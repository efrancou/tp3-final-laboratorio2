import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ApiCrud from './components/ApiCrud';
// import AplicacionCrudApp from "./components/AplicacionCrudApp" ;



function App() {
  return (
    <div class="body">
      <div class="heading">
      <h1>Registro de llegada de participantes</h1>
      <h2>CARRERA VILLA ELISA:</h2>
      </div>
      <ApiCrud/>

      {/* <AplicacionCrudApp/> */}
    </div>
  );
}

export default App;

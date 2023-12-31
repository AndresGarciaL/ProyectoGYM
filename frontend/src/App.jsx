import Comida from './Views/Comida';
import ComidaAdultos from './Views/ComidaAdultos';
import Login from './Views/Login';
import ComidaNinios from './Views/ComidaNinios';
import ComidaAdolescentes from './Views/ComidaAdolescentes';
import ComidaTercera from './Views/ComidaTercera';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './Views/Registro';
import Favoritos from './Views/Favoritos';
import Inicio from './Views/Inicio';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Comida" element={<Comida />}/>
        <Route path="/Comida_Adultos" element={<ComidaAdultos />}/>        
        <Route path="/Comida_Niños" element={<ComidaNinios />}/>
        <Route path="/Comida_Adolescentes" element={<ComidaAdolescentes />}/>
        <Route path="/Comida_Tercera_Edad" element={<ComidaTercera />}/>
        <Route path="/Registro" element={<Registro />}/>
        <Route path="/Favoritos" element={<Favoritos />}/>
        <Route path="/Inicio" element={<Inicio />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
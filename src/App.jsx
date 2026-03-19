import { Routes, Route } from "react-router-dom";
import './App.css'
import Inicio from './vistas/Inicio'
import Productos from './vistas/Productos'
import Categorias from './vistas/Categorias'
import NewProducto from "./vistas/NewProducto";
import EditProducto from "./vistas/EditProducto";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/categorias' element={<Categorias />} />
      <Route path='/agregarproducto' element={<NewProducto />} />
      <Route path='/editarProducto/:id' element={<EditProducto />} />
    </Routes>
  )
}

export default App

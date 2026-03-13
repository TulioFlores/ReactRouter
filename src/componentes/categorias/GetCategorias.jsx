import React from 'react'
import {use} from 'react'

const URL = "http://127.0.0.1:3000/api/categorias"
const fetchCategorias = async () => {
    const categorias = await fetch(URL);
    return categorias.json();
}
const promiseCategorias = fetchCategorias();

function GetCategorias() {
  const categorias = use(promiseCategorias);
  return (
    <div>
      {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.name}
          </option>
      ))}
    </div>
  )
}
 
export default GetCategorias
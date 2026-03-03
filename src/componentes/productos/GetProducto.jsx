import React from 'react'
import { use } from "react";
const URL = "http://127.0.0.1:3000/api/productos/2"
const fetchProducto = async() => {
    const producto = await fetch(URL);
    return producto.json();
}
const productoPromise = fetchProducto();
function GetProducto() {
  const producto = use(productoPromise);
  return (
    <div>
      <h1>{producto.nombre}</h1>
    </div>
  )
}

export default GetProducto
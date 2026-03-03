import React from 'react'

const URL = "http://localhost:3000/api/productos/2"
const fetchProducto = async() => {
    const productos = await fetch(URL);

    return productos.json();
}
const productoPromise = fetchProducto();
function GetProducto() {
  const producto =  use();
  return (
    
    <div>{producto.nombre}</div>
  )
}

export default GetProducto
import React from 'react'
import { use } from "react";
const URL = "http://127.0.0.1:3000/api/productos"
const fetchProductos = async () => {
    const productos = await fetch(URL);
    return productos.json();
}
const productosPromise = fetchProductos();
function GetProductos() {
    const productos = use(productosPromise);
    return (
        <div className='container'>
            <h2>Productos</h2>
            <button className='btn btn-primary'>Agregar producto</button>
            <table className='table'>
                <caption>Productos</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                         <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.categoria}</td>
                            <table>
                                <button className='btn btn-primary'>Editar</button>
                                <button className='btn btn-danger'>Eliminar</button>
                            </table>
                         </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetProductos
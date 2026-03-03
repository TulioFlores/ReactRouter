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
        <div>
            <table>
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
                    {productos.map((producto) => {
                         <tr key={producto.id}>
                            <td></td>
                            <td></td>
                            <td></td>
                         </tr>   
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default GetProductos
import React, { use } from 'react'
import Header from '../componentes/Header/Header'
import EditarProducto from '../componentes/productos/EditarProducto'
import { useParams } from 'react-router-dom'


function EditProducto() {
    const {id} = useParams();
    console.log(id);
  return (
    <>
        <Header></Header>
        <EditarProducto idProducto={id}/>
    </>
  )
}

export default EditProducto
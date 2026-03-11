import React from 'react'
import {useForm} from 'react-hook-form'
import GetCategorias from '../categorias/GetCategorias'

function AddProducto() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = userForm();
    return (
        <div className='container'>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <h2 className='my-2'>Agregar Producto</h2>
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre GetProductos</label>
                            <input type="text" class="form-control" {...register("nombre", {required: true})}/>
                        </div>
                        <div class="mb-3">
                            <label for="precio" class="form-label">Precio</label>
                            <input type="number" class="form-control" {...register("precio", {required: true})}/>
                        </div>
                        <div class="mb-3">
                            <label for="categoria" class="form-label">Categoria</label>
                            <select className="form-control" {...register("categoria", {required: true})}>
                                <option value="">
                                    Selecciona una opción
                                </option>
                                <GetCategorias/>
                            </select>
                        </div>
                        <div className="mb-3 d-flex justify-content-end">
                            <button className='btn btn-danger ms-2'>Cancelar</button>
                            <button className='btn btn-primary ms-2'>Aceptar</button>
                        </div>
                    </form>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default AddProducto
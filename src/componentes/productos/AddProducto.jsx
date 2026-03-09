import React from 'react'

function AddProducto() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <h2 className='my-2'>Agregar Producto</h2>
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre GetProductos</label>
                            <input type="text" class="form-control" name='nombre' />
                        </div>
                        <div class="mb-3">
                            <label for="precio" class="form-label">Precio</label>
                            <input type="number" class="form-control" name='precio' />
                        </div>
                        <div class="mb-3">
                            <label for="categoria" class="form-label">Categoria</label>
                            <select name="categoria" className="form-control">
                                <option value="">
                                    Selecciona una opción
                                </option>
                                <option value="1">
                                    Laptops
                                </option>
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
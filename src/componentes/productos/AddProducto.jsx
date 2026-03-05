import React from 'react'

function AddProducto() {
    return (
        <div>
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
            </form>
        </div>
    )
}

export default AddProducto
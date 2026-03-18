import React from 'react'
import { useForm } from 'react-hook-form'
import GetCategorias from '../categorias/GetCategorias'

function AddProducto() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const URL = "http://127.0.0.1:3000/api/productos"
        try {
            const resp = await fetch(URL, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            });

            if(resp.status == 201){
                alert("Producto agregado exitosamente");
            }
            if(resp.status == 409){
                alert("Ya existe un producto con ese nombre");
            }
            

        } catch (error) {
            console.log(error)
        }

    })
    return (
        <div className='container'>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <h2 className='my-2'>Agregar Producto</h2>
                    <form action="" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" {...register("nombre", { required: true })} />
                            {errors.nombre && <span>Se debe especificar un nombre</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="number" className="form-control" {...register("precio", { required: true })} />
                            {errors.precio && <span>Se debe especificar un precio</span>}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoriaId" className="form-label">Categoria</label>
                            <select className="form-control" {...register("categoriaId", { required: true })}>
                                <option value="">
                                    Selecciona una opción
                                </option>
                                <GetCategorias />
                            </select>
                            {errors.categoriaId && <span>Se debe especificar una categoria</span>}

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
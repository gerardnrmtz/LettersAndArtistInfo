import React, { useState } from "react";

function Formulario({consultarApiLetra}){

    //Actualizar el state de los inputs
    const [busqueda,agregarBusqueda]=useState({
        artista:'',
        cancion:''

    })
    //cuando hacemos submit al form

const handleSubmit=e=>{
    e.preventDefault();
    consultarApiLetra(busqueda);
}

    const ActualizarState= e=>{
        agregarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }


    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        onChange={ActualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        onChange={ActualizarState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}
export default Formulario;
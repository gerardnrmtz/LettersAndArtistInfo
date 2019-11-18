import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./componentes/Formulario.js";
import axios from "axios";
import Cancion from "./componentes/Cancion.js";
import Informacion from "./componentes/Informacion.js";

function App() {
  //utilizar 3 states diferentes

  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetras] = useState([]);
  const [info, agregarInfo] = useState({});

  //Metodo para consultar la APi de Letras de canciones

  const consultarApiLetra = async busqueda => {
    const { artista, cancion } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    //consultar la api
    const resultado = await axios(url);

    //almacenar la letras en el state
    agregarArtista(artista);
    agregarLetras(resultado.data.lyrics);
  };
  //metodo para consultar la api de info
  const consultarApiInfo = async () => {
    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url);

      agregarInfo(resultado.data.artists[0]);
    }
  };
  useEffect(() => {
    consultarApiInfo();
  }, [artista]);

  return (
    <Fragment>
      <Formulario consultarApiLetra={consultarApiLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;

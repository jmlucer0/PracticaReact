import { useState } from "react";
import "./App.css";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Pelicula from "./Pelicula";
import PeliculasJson from "./Peliculas.json";

function App() {

  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = PeliculasJson;
  const totalPorPagina = 4;
  
  const cargarPeliculas =()=>{
     peliculas = peliculas.slice(
    (paginaActual - 1) * totalPorPagina,
    paginaActual * totalPorPagina
  );
  }
 
  const getTotalPaginas = ()=>{
    let cantidadTotalPeliculas = PeliculasJson.length;
    return Math.ceil(cantidadTotalPeliculas / totalPorPagina);
  }

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map(pelicula => (
        <Pelicula
          titulo={pelicula.titulo}
          clasificacion={pelicula.clasificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}>
          descripcion={pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion paginaActual={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{setPaginaActual(pagina)}}></Paginacion>
    </PageWrapper>
  );
}

export default App;

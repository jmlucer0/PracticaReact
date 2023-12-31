export default function Paginacion(props){
        
        const getPaginas = ()=>{
            const resultado = [];
            for(let i= 0; i < props.total; i++){
                let pagina = i + 1;
                resultado.push(
                <a onClick={()=>props.onChange(pagina)} 
                className={props.pagina === pagina ? 'active' : ''} href="#">
                    {pagina}
                    </a>
                );
            }
            return resultado
        }

    return (

        <div className="topbar-filter">
        <label>Movies per page:</label>
        <div className="pagination2">
          <span>Page {props.paginaActual} of {props.total}:</span>
            {getPaginas()}
            {/* <i className="ion-arrow-right-b"></i> */}
        </div>
      </div>
    )
}
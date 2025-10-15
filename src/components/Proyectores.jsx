import { Link } from "react-router-dom";

{/* ESTO ES UN COMPONENTE DENTRO DE LA CARPETA components*/}
{/* con esta funcion hago etiquetas personalizadas en este caso esta en el footer la etiqueta; las funciones siempre
    deben ir la primera con mayuscula para que el navegador las pueda leer esto es en react*/}
    {/* Los props son los input de la funcion como se hacia en python los props sonn objetos*/}
    {/*En las funciones se pueden utilizar props pero tambien poner los nombres de la funcion como se haria 
        en python de esta manera los nombre no son genericos y se puede leer el codigo mas facilmente  */}
    {/*Podemos decir que function Proyectores es en realidad un componente  */}
function Proyectores({nombreProyecto,imagen}){
    return(
         //con componentes en react son pedazos de codigo que se pueden extraer de mi logica y se pueden reutilizar
         //tanto como yo quiera
        <li className="breadCard backgroundRojo">
            <Link to={'/suzuki'}>
            <div className="contenedorImagen">
                <img src= {imagen} alt="proyecto concejo"/>
            </div>
             </Link>
            <span className="breadTitle ">
                {nombreProyecto}
            </span>
        </li>
    );
}

export default Proyectores;
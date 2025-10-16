
import pyp from 'media/pyp.png';
//vamos a escribir la funcion como un arrow function
//traslade el header de index.jsx y lo converti en un componente llamado Header//
const Header=()=>{
    return (
        <header>
         {/* creo la clase navbar para los estitlos ul y li que los contiene para que los objetos no se vean debajo 
         sino uno al lado del otro; las class que se llaman en html puro aqui se llaman className para no
         generar conflictos con clases en react que son orientadas a objetos  */}
        <ul className="navbar">
            <li>
                {/**  siempre que creo una imagen debo hacer src=ubicacion y alt el nombre voy aplicar clases
                 porque la imagen es muy grande y deseo que quede de medidas requeridas
                 tambien aqui importo el logo que tengo en la párte superior izquierda de mi web*/}
                <img src={pyp} alt="imagen pyp" class="logo"/>
            </li>
            <li>
                 {/** le aplico a todos los botones la clase button y despues las especificas en eswte caso mainbutton */}
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                 {/** cuador de busqueda proyectos pyp */}
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fas fa-search iconoBusqueda"></i>
                </div>
            </li>
            <li>
                 {/* creo el boton de login pero de otro color*/}
               <button className="button secondaryButton">login</button> 
            </li>
            {/* como nuevo post y registro son botones principales os hago d la misma manera los duplico */}
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    )
}

export default Header;

//FORMAS DE ESCRIBIR decalarar variables funciones arrays en java jsx o java
//////const variableNumnerica=3;
//const variableTexto='esto es una cadena o textop';
////const variableArray=[1,2,3,4,5];
//const variableObjeto={
    //llave1:'valor1',
    //llave2:'valor2',
    //llave3:'valor3',

//};
//const listaObjetos=[
   // {
    //llave1:'valor1',
    //llave2:'valor2',
    //llave3:'valor3',
    //},
    //{
    //llave1:'valor1',
    //llave2:'valor2',
    //llave3:'valor3',
    //},
    //{
   /// llave1:'valor1',
    //llave2:'valor2',
    //llave3:'valor3',
    //}
//];

//arrow function o funciones de flecha pero esta como es una variable la puedo utilizar muchas veces da mas versatilidad
//esta es una funcion anonima que no tiene nombre
///const nombreFuncion=(in1,in2,in3)=>{
    //return 'retorno de la funcion';
//};
//ambas sintaxis son correctas
//function nombreFuncion2(in1,in2,in3){
    //return 'retorno de la funcion';

//}

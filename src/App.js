import pyp from './media/pyp.png';
import './styles/styles.css'
import proyectoConcejo from './media/IMG_4683.JPG';
import concejo from './media/IMG_4740.JPG';
{/** dentro de function app meto el html de mi codigo html puro*/}
function App() {
  return (
    <div className="App">
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
    <main>
      <section>
      <h1>Proyectos ejecutados</h1>
        {/*con esta clase breadCa.. quiero que las fotos esten una al lado de la otra y no abajo*/}
      <ul className="breadCardContainer">
        <li className="breadCard">
             {/*cuando las fotos son muy grandes realizo un contenedorImagen con el fin de con css acomodarla de buena forma
             a la maquetacion html  */}
            <div className="contenedorImagen">
                 {/*import proyectoConcejo from es el nombre que pongo en el import para importar las imagenes 
                 en el src={entre corchetes} */}
                <img src= {proyectoConcejo} alt="proyecto concejo"/>
            </div>
            <span className="breadTitle">
                proyecto concejo
            </span>
        </li>
        <li className="breadCard">
            <div className="contenedorImagen">
                <img src= {concejo} alt="proyecto concejo"/>
            </div>
            <span className="breadTitle">
                sala concejo
            </span>

        </li>
      </ul>
      </section>
        <section></section>
    </main>
    <section></section>
    <section></section>
    <footer></footer>
    </div>
  );
}

export default App;

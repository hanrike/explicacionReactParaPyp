{/*Suponiendo que necesite el card Proyectores  */}
{/*lO MEJOR ES HACER UN CODIGO PARA QUITAR LOS PUNTOS DE LA IMPORTACION  */}
import Proyectores from "components/Proyectores";
import equiposSuzuki from 'media/IMG_1661.JPG'
import proyectoConcejo from 'media/IMG_4683.JPG';
import concejo from 'media/IMG_4740.JPG';
import pyp from 'media/pyp.png';
function Index(){
    return(
        <div>
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
        {/* con componentes lo unico que tengo que hacer es llamar a mi etiqueta personalizada, 
        que es la funcion que hice  */}
        {/* En proyectores pongo el componente nombreProyecto que puedo cambiar solo con la funcion Proyectores
        y el objeto {props.cualquiercosa}  */}
         <Proyectores nombreProyecto='Sala de Concejo' imagen={concejo}/>
         <Proyectores nombreProyecto='Concejo Principal' imagen={proyectoConcejo}/>
         <Proyectores nombreProyecto='Mantenimiento Suzuki' imagen={equiposSuzuki}/>
         <Proyectores nombreProyecto='Mantenimineto Suzuki'/>
         <Proyectores nombreProyecto='Mantenimineto Suzuki'/>
      </ul>
      </section>
        <section></section>
    </main>
    <section></section>
    <section></section>
    <footer>          
    </footer>
        </div>
    )
}
export default Index;
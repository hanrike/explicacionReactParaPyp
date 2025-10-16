import Proyectores from "components/Proyectores";
import equiposSuzuki from 'media/IMG_1661.JPG'
import proyectoConcejo from 'media/IMG_4683.JPG';
import concejo from 'media/IMG_4740.JPG';
import Header from "components/Header";

{/*Suponiendo que necesite el card Proyectores, hay que tener en cuenta que estos comentarios no deben ir al inicio  */}
{/*lO MEJOR ES HACER UN CODIGO PARA QUITAR LOS PUNTOS DE LA IMPORTACION  */}
function Index(){
    return(
        //Para evitar errores cuando traslado el codigo del App.jsx al index lo meto dentro de un div hay otras maneras
    <div>
        {/*importo el header y deberia funcionar igual que como hasta ahora esta funcionando el aplicativo  */}
        <Header />   
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
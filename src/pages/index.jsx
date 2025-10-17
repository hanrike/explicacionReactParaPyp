import Proyectores from "components/Proyectores";
import equiposSuzuki from 'media/IMG_1661.JPG'
import proyectoConcejo from 'media/IMG_4683.JPG';
import concejo from 'media/IMG_4740.JPG';
import Layout from "layouts/Layout";

{/*Suponiendo que necesite el card Proyectores, hay que tener en cuenta que estos comentarios no deben ir al inicio  */}
{/*lO MEJOR ES HACER UN CODIGO PARA QUITAR LOS PUNTOS DE LA IMPORTACION  */}
{/*De esta manera en el Index ya no toca importar el header y el footer en todas las páginas solo 
  con el lLayout ya no toca poner el div el header y el footer si no que con el layout logro tener
  en este caso los sections los pongo dentro del layout asi ahorro tener que poner en cada uno div...main footer etc.
  y conservo en todas las paginas el mismo esquema  */}
function Index(){
    return(
      <Layout>
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
      </Layout>
    )
};
export default Index;
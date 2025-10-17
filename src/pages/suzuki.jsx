import Header from "components/Header";
import Footer from "components/Footer";
//aqui lo que hago es en el proyecto suzuki meter el header y el footer para que toda mi pagina quede igual
//para eso importo el header y el footer de componentes y asi mis pagians van a quedar con esto asi es consistente
//con mi aplicacion 
function Suzuki() {
  return (
    //queremos que lo que se puse en el div quede adentro de donde yo puse el main eso se puede porque a todas
    //las funciones de react les entra un prop que se llama {children}
    
      <div>Informacion de los proyectos ejecutados en Suzuki</div>
    
  );
}
 export default Suzuki;
import Header from "components/Header";
import Footer from "components/Footer";
//aqui lo que hago es en el proyecto suzuki meter el header y el footer para que toda mi pagina quede igual
//para eso importo el header y el footer de componentes y asi mis pagians van a quedar con esto asi es consistente
//con mi aplicacion 
function Suzuki() {
  return (
    <div>
      <Header />
      Esta es la pagina de informacion del proyecto Suzuki
      <Footer />
    </div>
  );
}
 export default Suzuki;
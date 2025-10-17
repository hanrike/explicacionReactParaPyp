import 'styles/styles.css';
import Index from 'pages';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Suzuki from 'pages/suzuki';
import Layout from 'layouts/Layout';
import Concejo from 'pages/concejo';
{/** Con respecto al tutorial ya las importaciones cambiaron al igual que la forma de hacer la navegacion entre paginas*/}
{/** movi todo mi codigo al index.jsx con el fin de poder realizar paginas y no todo quede dentro del App.jsx*/}
{/** dentro de function app meto el html de mi codigo html puro*/}
{/** react se trabaja declarando funciones nombre de la funcion App(parametros) y llaves con el contenido de la funcion*/}
{/** lo bueno de java es que puede retornar codigo html*/}
function App() {
  return (
    <div className="App">
      {/**El Router se debe llamar cuando instalo la libreria y con ello poder gestionar rutas de mi aplicativo*/}
      <Router>
        {/**El Routes permite que sea una y solo una a la pagina que gestionamos para navegar*/}
        <Routes>
           {/**Esta es la manera en la que cada una de las rutas que hagan parte de un mismo Layout se llaman
            * desde el propio App.jsx con el fin de evitar importar el Layout en cada una de las paginas asi en cada
            * una de las paginas queda solo el contenido mucho mas facil de leer
           */}
          <Route element={<Layout />}>
          {/**Despúes del Routes viene el Route path='' es la ruta  a la cual voy a entrar*/}
          <Route path='/suzuki' element={<Suzuki />}>
          {/**aqui con este Index utilizo todas las funciones que traslada de la carpeta pages haciendo la importacion*/}
          </Route>
          {/**Esta es la ruta principal que es el index */}
          <Route path='/' element={<Index />}>
          </Route>
          {/**De esta manera estoy creando rutas facilmente con el header y el footer a traves de los pasos que hice
           * con el Layout asi solo me preocupo de hacer lAYOUT UNA SOLA VEZ o header y utilizarlo en todas mis paginas
           */}
          <Route path='/concejo' element={<Concejo />}>
          </Route>
          </Route>  
        </Routes>
      </Router>
    </div>
  );
}




export default App;

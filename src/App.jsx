import 'styles/styles.css';
import Index from 'pages';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Suzuki from 'pages/suzuki';
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
          {/**Despúes del Routes viene el Route path='' es la ruta  a la cual voy a entrar*/}
          <Route path='/suzuki' element={<Suzuki />}>
      {/**aqui con este Index utilizo todas las funciones que traslada de la carpeta pages haciendo la importacion*/}
          </Route>
          {/**Esta es la ruta principal que es el index */}
          <Route path='/' element={<Index />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}




export default App;

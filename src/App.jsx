import 'styles/styles.css';
import Index from 'pages';
{/** movi todo mi codigo al index.jsx con el fin de poder realizar paginas y no todo quede dentro del App.jsx*/}
{/** dentro de function app meto el html de mi codigo html puro*/}
{/** react se trabaja declarando funciones nombre de la funcion App(parametros) y llaves con el contenido de la funcion*/}
{/** lo bueno de java es que puede retornar codigo html*/}
function App() {
  return (
    <div className="App">
      {/**aqui con este Index utilizo todas las funciones que traslada de la carpeta pages haciendo la importacion*/}
        <Index />
    </div>
  );
}




export default App;

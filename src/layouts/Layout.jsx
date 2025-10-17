import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
//los componenetes en react deberian tener un solo parent osea no se puede hacer un return de varios elementos
//diferentes
//una forma de solucionar cuando se tienen varios elementos para el return es un div
//Ahora a diferencia del tutoria de Daniel ya n o se utilizan {children} const Layout({children}) esto ya no aplica 
//Ahora se importa la libreria Outlet y solo se pone en este caso en el main de esta manera renderiza todo mas
//  facil dentro de la estructura que quiera o componenete
const Layout = () => {
  return (
    //creo la clase mainContainer donde acomodare el footer donde debe estar
        //voy a crear la clase mainContainer para agregarle estilos al footer y poderlo ubicar abajo esto se hace en css
        <div className='mainContainer'>
          <Header />
          <main>
            <Outlet /> {/* Aquí se renderizan Index, Suzuki, etc. */}
          </main>
          <Footer />
        </div>
  )
}

export default Layout;

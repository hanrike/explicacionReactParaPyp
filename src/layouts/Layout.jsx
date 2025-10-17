import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
//los componenetes en react deberian tener un solo parent osea no se puede hacer un return de varios elementos
//diferentes
//una forma de solucionar cuando se tienen varios elementos para el return es un div
const Layout = () => {
  return (
    //creo la clase mainContainer donde acomodare el footer donde debe estar
        //voy a crear la clase mainContainer para agregarle estilos al footer y poderlo ubicar abajo esto se hace en css
        <div className='mainContainer'>
          <Header />
          <main>Esta es la pagina de informacion del proyecto Suzuki</main>
          <Footer />
        </div>
  )
}

export default Layout;

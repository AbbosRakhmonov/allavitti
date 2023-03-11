import React from 'react';
import Main from './Pages/Main/Main';
import Allavitti from './Pages/Allavitti/Allavitti';
import Products from './Pages/Products/Products';
import AboutProduct from './Pages/AboutProduct/AboutProduct';
import MoreQuestion from './Pages/MoreQuestion/MoreQuestion';
import Footer from './Pages/Footer/Footer';
import './index.css';
function App() {
  return (
     <>  
         <Main/>
         <Allavitti/>
         <Products/>
         <AboutProduct/>
         <MoreQuestion/>
         <Footer/>
     </>
  );
}

export default App;


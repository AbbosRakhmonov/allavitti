import React from 'react'
import Home from './pages/GeneralHomePage/Home'
import Articles from './pages/Articles/Articles'
import {Route, Routes} from 'react-router-dom'
function App() {
    return (
     <Routes>
         <Route path='/articles' element={<Articles/>}/>
         <Route path='/' element={<Home/>}/>
     </Routes>   
    )
}
export default App

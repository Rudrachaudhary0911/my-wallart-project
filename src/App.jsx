import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Pages/Home';
import Mywork from './components/Pages/Mywork';
import Service from './components/Pages/Service';
import Contact from './components/Pages/Contact';

function App() {


  return (
    <div className='dark:bg-black relative '>
      
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/service' element ={<Service/>}/>
        <Route path ='/mywork' element ={<Mywork/>}/>
        <Route path ='/contact' element ={<Contact/>}/>

      </Routes>
      

    </div>
  )




}

export default App;
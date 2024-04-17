import React, { useState } from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import Datasheet from './components/Datasheet'
import Contact from './components/Contact'
import Form1 from './components/Form1'
import '@fortawesome/fontawesome-free/css/all.css';

function App() {

  return (
   
    <div>
    <div>
 <Header></Header>
   <Routes>
     <Route path='/' element={<Home></Home>}/>
     <Route path='/students' element={<Students></Students>}/>
     <Route path='/datasheet' element={<Datasheet></Datasheet>}/>
     <Route path = '/contactus' element={<Contact></Contact>} />
     <Route path='/app/:id' element={<Form1></Form1>} />
   </Routes>
 </div> 

   
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Contact from './component/contact.jsx'
import About from './component/About.jsx'
import VehicleList from './component/VehicleList';
import VehicleForm from './component/VehicleForm';
// import EmailManager from './EmailManager'; // reuse AddEmailForm + EmailList

function App() {
  const token = localStorage.getItem('token');
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
  
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/vehicles" element={<VehicleList/>} />
         <Route path="/vehicle/create" element={<VehicleForm token={token} />} />
        <Route path="/vehicle/:id/view" element={<VehicleForm token={token} />} />
        <Route path="/vehicle/:id/edit" element={<VehicleForm token={token} />} />
           {/* <Route path="/emails" element={<EmailManager token={token} />} /> */}


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

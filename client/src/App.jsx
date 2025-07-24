import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login.jsx';
import Home from './component/Home.jsx';
import './App.css';
import Navbar from './component/Navbar.jsx';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';
import VehicleList from './component/VehicleList.jsx';
import VehicleForm from './component/VehicleForm.jsx';
import Footer from './component/Footer.jsx'; // ⬅️ Import Footer

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<VehicleList token={token} />} />
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicle/create" element={<VehicleForm token={token} />} />
          <Route path="/vehicle/:id/view" element={<VehicleForm token={token} />} />
          <Route path="/vehicle/:id/edit" element={<VehicleForm token={token} />} />
          {/* <Route path="/emails" element={<EmailManager token={token} />} /> */}
        </Routes>
        <Footer /> {/* ⬅️ Add Footer here */}
      </BrowserRouter>
    </>
  );
}

export default App;

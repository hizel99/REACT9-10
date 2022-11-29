import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AbotUs";
import Contact from "./Pages/Contact";
import User from './Components/User';



function App() {
  
  return (
    <div className="container">
      
      <BrowserRouter>
      <h1>NavBar...</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Inicio</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link"  to={"/Contact"}>Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to={"/AboutUs"}>Nosotros</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <hr />

        <Routes>
          <Route path='/AboutUs:id' element={<User/>}> </Route>
          <Route path='/Contact' element={<Contact />}> </Route>
          <Route path='/AboutUs' element={<AboutUs />}> </Route>
          <Route path='/' element={<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

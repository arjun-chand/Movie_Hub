import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate=useNavigate()
  
  return (
    <div style={{marginBottom:"32px"}}>
    <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className=" navlink nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/comedy">Comedy</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/horror">Horror</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/action">Action</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/romance">Romance</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/adventure">Adventure</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/anime">Anime</Link></li>
            <li className="nav-item"><Link className="navlink nav-link active" aria-current="page" to="/sifi">Science Fiction</Link></li>
            
          </ul>
          <form className="d-flex" role="search">
              <button className="btn btn-outline-success mx-2" onClick={() => navigate("/upload")}>Upload a Movie</button>
            
          </form>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar

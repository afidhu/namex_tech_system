
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
              <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <h2  style={{color:"blue"}} >Namex Technologies</h2>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-4 py-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/service" className="nav-item nav-link">Service</Link>
                        <Link to="/project" className="nav-item nav-link">Project</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                <Link to="/feature" className="dropdown-item">Feature</Link>
                                <Link to="/quote" className="dropdown-item">Free Quote</Link>
                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/404" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        
                    </div>
                    <div className="h-100 d-lg-inline-flex align-items-center d-none">
                        <Link to="#" className="btn btn-square rounded-circle  me-2" style={{backgroundColor:"blue"}} ><i className="fab fa-facebook-f text-white"></i></Link>
                        <Link to="#" className="btn btn-square rounded-circle  me-2" style={{backgroundColor:"blue"}}><i className="fab fa-twitter text-white"></i></Link>
                        <Link to="#" className="btn btn-square rounded-circle  me-2" style={{backgroundColor:"blue"}}><i className="fab fa-linkedin-in text-white"></i></Link>
                        <Link to="#" className="btn btn-square rounded-circle me-0" style={{backgroundColor:"blue"}}><i className="fab fa-instagram text-white"></i></Link>
                    </div>
                </div>
            </nav>
  )
}

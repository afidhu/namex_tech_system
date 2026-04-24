import React from 'react'

export default function Header() {
  return (
            <div className="container-fluid bg-dark px-5">
                <div className="row gx-4 d-none d-lg-flex">
                    <div className="col-lg-6 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}} >
                                <small className="fa fa-map-marker-alt text-white"></small>
                            </div>
                            <small>123 Street, New York, USA</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}}>
                                <small className="fa fa-envelope-open text-white"></small>
                            </div>
                            <small>info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}}>
                                <small className="fa fa-phone-alt text-white"></small>
                            </div>
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <div className="btn-sm-square rounded-circle me-2" style={{backgroundColor:"blue"}}>
                                <small className="far fa-clock text-white"></small>
                            </div>
                            <small>Mon - Fri : 9AM - 9PM</small>
                        </div>
                    </div>
                </div>
            </div>
  )
}

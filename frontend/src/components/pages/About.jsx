import React from 'react'
import NavBar from '../includes/navbar/NavBar'

export default function About() {
    return (
        <div>
             {/* <NavBar /> */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{minHeight: "400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={"../../assets/img/about.jpg"} style={{objectFit: "cover"}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="bg-primary mb-3" style={{width: "60px", height: "2px"}}></div>
                                <h1 className="display-5 mb-4 ">About Us</h1>
                                <p className="mb-4 pb-2">Namex Technologies Ltd is an Information and Communications Technology (ICT) and security systems provider based in Dar es Salaam, Tanzania</p>
                                <div className="row g-4 mb-4 pb-3">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-1.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="fw-medium  mb-0"  style={{color:"blue"}} >Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-5.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="fw-medium mb-0" style={{color:"blue"}}>Projects Done</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" className=" text-white rounded-pill py-3 px-5" style={{backgroundColor:"blue"}}  >Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            )
}



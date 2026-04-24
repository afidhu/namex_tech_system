import React from 'react'
import NavBar from '../includes/navbar/NavBar'

export default function Project() {
  return (
    <div>
         {/* <NavBar /> */}
       <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-primary mb-3 mx-auto" style={{width: "60px", height: "2px"}} ></div>
                        <h1 className="display-5 mb-5">Our Projects</h1>
                    </div>
                    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">Complete Projects</li>
                                <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-1.jpg"} alt="" />
                                <div className="text-center p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Business Security</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Business Security</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-1.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-2.jpg"}  alt=""/>
                        <div className="text-center p-4">
                                    <p className=" mb-2" style={{color:"blue"}}>Fire Detection</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className=" mb-2" style={{color:"blue"}}>Fire Detection</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-2.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-3.jpg"} alt="" />
                                <div className="text-center p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Access Control</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">Access Control</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-3.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-4.jpg"} alt="Alarm Systems" />
                                <div className="text-center p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Alarm Systems</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Alarm Systems</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-4.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-5.jpg"} alt="" />
                                <div className="text-center p-4">
                                    <p className="mb-2" style={{color:"blue"}}>CCTV & Video</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">CCTV & Video</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-5.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={"../../assets/img/portfolio-6.jpg"} alt="" />
                                <div className="text-center p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Smart Home</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="mb-2" style={{color:"blue"}}>Smart Home</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href={"../../assets/img/portfolio-6.jpg"} data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href=""><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

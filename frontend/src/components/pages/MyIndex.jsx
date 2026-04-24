import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NavBar from "../includes/navbar/NavBar";
import Header from "../includes/header/Header";

export default function MyIndex() {
    return (
    <div>
          {/* <!-- Spinner Start --> */}
    <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    {/* <!-- Spinner End --> */}


            {/* <!-- Topbar Start --> */}
                {/* <Header/> */}
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
                {/* <NavBar /> */}
            {/* <!-- Navbar End --> */}


            {/* <!-- Carousel Start --> */}
 <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="position-relative">
            <img
              src="/assets/img/carousel-1.jpg"
              className="w-100"
              alt=""
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ background: "rgba(0,0,0,0.5)" }}
            ></div>

            {/* Content */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
              <h1 className="display-3 mb-4 text-white" >
                Best CCTV & Security Solution For You
              </h1>

              <p className="fs-5 mb-4">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              </p>

              <a className="btn btn-primary me-3 px-4 py-2">
                Read More
              </a>
              <a className="btn btn-light px-4 py-2">
                Free Quote
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="position-relative">
            <img
              src="/assets/img/carousel-2.jpg"
              className="w-100"
              alt=""
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ background: "rgba(0,0,0,0.5)" }}
            ></div>

            <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
              <h1 className="display-3 mb-4 text-white">
                Smart Security Solution For All Business
              </h1>

              <p className="fs-5 mb-4 text-white">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              </p>

              <a className="btn btn-primary me-3 px-4 py-2">
                Read More
              </a>
              <a className="btn btn-light px-4 py-2">
                Free Quote
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="position-relative">
            <img
              src="/assets/img/carousel-3.jpg"
              className="w-100"
              alt=""
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ background: "rgba(0,0,0,0.5)" }}
            ></div>

            <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
              <h1 className="display-3 mb-4 text-white">
                Innovative Solution For Security System
              </h1>

              <p className="fs-5 mb-4 text-white">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              </p>

              <a className="btn btn-primary me-3 px-4 py-2">
                Read More
              </a>
              <a className="btn btn-light px-4 py-2">
                Free Quote
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            {/* <!-- Carousel End --> */}


            {/* <!-- Facts Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 bg-dark p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{width: "64px", height: "64px", background: "#000000"}}>
                                        <img className="img-fluid" src={"/assets/img/icon/icon-3.png"} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{color: "#000000"}}>01</h1>
                                </div>
                                <h5 className="text-white">Home Security</h5>
                                <hr className="w-25" />
                                <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="h-100 bg-dark p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{width: "64px", height: "64px", background: "#000000"}}>
                                        <img className="img-fluid" src={"../../assets/img/icon/icon-4.png"} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{color: "#000000"}}>02</h1>
                                </div>
                                <h5 className="text-white">Access Control</h5>
                                <hr className="w-25" />
                                <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 bg-dark p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{width: "64px", height: "64px", background: "#000000"}}>
                                        <img className="img-fluid" src={"../../assets/img/icon/icon-5.png"} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{color: "#000000"}}>03</h1>
                                </div>
                                <h5 className="text-white">24/7 Support</h5>
                                <hr className="w-25"/>
                                    <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts Start --> */}


            {/* <!-- About Start --> */}
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
                                <h1 className="display-5 mb-4">About Us</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <div className="row g-4 mb-4 pb-3">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-1.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                                <p className="fw-medium text-primary mb-0">Happy Clients</p>
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
                                                <p className="fw-medium text-primary mb-0">Projects Done</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <div className="bg-primary mb-3 mx-auto" style={{width: "60px", height: "2px"}}></div>
                        <h1 className="display-5 mb-5">Our Services</h1>
                    </div>
                    <div className="row g-0 service-row">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                                    <img className="img-fluid" src={"../../assets/img/icon/icon-6.png"} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Commercial CCTV System</h4>
                                <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                                <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                                    <img className="img-fluid" src={"../../assets/img/icon/icon-8.png"} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Finger Print Access</h4>
                                <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                                <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                                    <img className="img-fluid" src={"../../assets/img/icon/icon-9.png"} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Fire Detection And Safety</h4>
                                <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                                <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{width: "64px", height: "64px"}}>
                                    <img className="img-fluid" src={"../../assets/img/icon/icon-3.png"} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Smart Home Security</h4>
                                <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                                <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Feature Start --> */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 ps-lg-0">
                                <div className="bg-primary mb-3" style={{width: "60px", height: "2px"}}></div>
                                <h1 className="display-5 mb-5">Why Choose Us</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-7.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="text-primary mb-2">Trusted</p>
                                                <h5 className="mb-0">Security</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-10.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="text-primary mb-2">Quality</p>
                                                <h5 className="mb-0">Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-3.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="text-primary mb-2">Smart</p>
                                                <h5 className="mb-0">Systems</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{width: "64px", height: "64px"}}>
                                                <img className="img-fluid" src={"../../assets/img/icon/icon-2.png"} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="text-primary mb-2">24/7 Hours</p>
                                                <h5 className="mb-0">Support</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0" style={{minHeight: "400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={"../../assets/img/feature.jpg"} style={{objectFit: "cover"}} alt="Feature Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- Projects Start --> */}
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
                                    <p className="text-primary mb-2">Business Security</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">Business Security</p>
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
                                    <p className="text-primary mb-2">Fire Detection</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">Fire Detection</p>
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
                                    <p className="text-primary mb-2">Access Control</p>
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
                                    <p className="text-primary mb-2">Alarm Systems</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">Alarm Systems</p>
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
                                    <p className="text-primary mb-2">CCTV & Video</p>
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
                                    <p className="text-primary mb-2">Smart Home</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p className="text-primary mb-2">Smart Home</p>
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
            {/* <!-- Projects End --> */}


            {/* <!-- Quote Start --> */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{minHeight: "400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={"../../assets/img/quote.jpg"} style={{objectFit: "cover"}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="bg-primary mb-3" style={{width: "60px", height: "2px"}} ></div>
                                <h1 className="display-5 mb-5">Free Quote</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: "55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: "55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: "55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" style={{height: "55px"}}>
                                                <option value={0}>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Get A Free Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Quote End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-primary mb-3 mx-auto" style={{width: "60px", height: "2px"}} ></div>
                        <h1 className="display-5 mb-5">Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src={"../../assets/img/team-1.jpg"} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src={"../../assets/img/team-2.jpg"} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src={"../../assets/img/team-3.jpg"} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src={"../../assets/img/team-4.jpg"} alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-dark rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-primary mb-3 mx-auto" style={{width: "60px", height: "2px"}}  ></div>
                        <h1 className="display-5 mb-5">Testimonial</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src={'../../assets/img/testimonial-1.jpg'} alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h4>Client Name</h4>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src={'../../assets/img/testimonial-2.jpg'} alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h4>Client Name</h4>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item text-center" data-dot="<img className='img-fluid' src={'../../assets/img/testimonial-3.jpg'} alt=''>">
                            <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h4>Client Name</h4>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}


            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Services</h5>
                            <a className="btn btn-link" href="">Business Security</a>
                            <a className="btn btn-link" href="">Fire Detection</a>
                            <a className="btn btn-link" href="">Alarm Systems</a>
                            <a className="btn btn-link" href="">CCTV & Video</a>
                            <a className="btn btn-link" href="">Smart Home</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Copyright Start --> */}
            <div className="container-fluid py-4" style={{background: "#000000"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                           This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>Distributed By <a className="border-bottom" href="https://themewagon.com/" >Themewagon</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}


            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>


            {/* <!-- JavaScript Libraries --> */}
            </div>




            )
}

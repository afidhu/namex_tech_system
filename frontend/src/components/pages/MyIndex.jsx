import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NavBar from "../includes/navbar/NavBar";
import Header from "../includes/header/Header";
import Service from "./Service";
import Project from "./Project";
import '../../Partner.css'

export default function MyIndex() {
    return (
    <div>
          {/* <!-- Spinner Start --> */}

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
               security Systems: Installation of CCTV cameras, electric fences (including smart fences with mobile alerts 
              </p>

              <a className="btn btn-primary me-3 px-4 py-2" style={{backgroundColor:"blue"}} >
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
               security Systems: Installation of CCTV cameras, electric fences (including smart fences with mobile alerts
              </p>

              <a className="btn btn-primary me-3 px-4 py-2" style={{backgroundColor:"blue"}} >
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
              security Systems: Installation of CCTV cameras, electric fences (including smart fences with mobile alerts
              </p>

              <a className="btn btn-primary me-3 px-4 py-2" style={{backgroundColor:"blue"}} >
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
          
            {/* <!-- About End --> */}


            {/* <!-- Service Start --> */}
            <Service/>

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
           <Project/>
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
                                            <button className="btn btn-primary w-100 py-3" type="submit" style={{backgroundColor:"blue"}} >Get A Free Quote</button>
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


            {/* <!-- our partners Start --> */}
   <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mb-5">
      <div className="bg-primary mb-3 mx-auto" style={{ width: "60px", height: "2px" }}></div>
      <h1 className="display-5">Our Partners</h1>
    </div>

    <div className="partner-slider">
      <div className="slide-track">

        {/* Partners */}
        <div className="slide">
          <img src="https://nest.go.tz/assets/images/logo.png" alt="NEST" />
          <p>NEST</p>
        </div>

        <div className="slide">
          <img src="https://kaziconnect.co.tz/assets/KaziConnectLogo-BnLKkXM8.jpeg" alt="Kaziconnect" />
          <p>Kaziconnect</p>
        </div>

        <div className="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
          <p>Amazon</p>
        </div>

        <div className="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
          <p>Microsoft</p>
        </div>

        <div className="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <p>Google</p>
        </div>

        <div className="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
          <p>Netflix</p>
        </div>

        <div className="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          <p>Apple</p>
        </div>

        {/* duplicate for smooth infinite scroll */}
        <div className="slide">
          <img src="https://nest.go.tz/assets/images/logo.png" alt="NEST" />
          <p>NEST</p>
        </div>

        <div className="slide">
          <img src="https://kaziconnect.co.tz/assets/KaziConnectLogo-BnLKkXM8.jpeg" alt="Kaziconnect" />
          <p>Kaziconnect</p>
        </div>

      </div>
    </div>
  </div>
</div>
            {/* <!-- our partners End --> */}


            {/* <!-- Footer Start --> */}
         
            {/* <!-- JavaScript Libraries --> */}
            </div>




            )
}

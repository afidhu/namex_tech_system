import React from 'react'

export default function Service() {
  return (
    <div>



    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center">
                <div className="bg-primary mb-3 mx-auto" style={{ width: '60px', height: '2px' }}></div>
                <h1 className="display-5 mb-5">Our Services</h1>
            </div>
            <div className="row g-0 service-row">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                            <img className="img-fluid" src="assets/img/icon/icon-6.png" alt="Icon"/>
                        </div>
                        <h4 className="mb-3">Commercial CCTV System</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                            <img className="img-fluid" src="assets/img/icon/icon-8.png" alt="Icon"/>
                        </div>
                        <h4 className="mb-3">Finger Print Access</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                            <img className="img-fluid" src="assets/img/icon/icon-9.png" alt="Icon"/>
                        </div>
                        <h4 className="mb-3">Fire Detection And Safety</h4>
                        <p className="mb-4">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem</p>
                        <a className="btn" href=""><i className="fa fa-arrow-right text-white me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="service-item border h-100 p-5">
                        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}  >
                            <img className="img-fluid" src="assets/img/icon/icon-3.png" alt="Icon"/>
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
                        <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </div>
  )
}




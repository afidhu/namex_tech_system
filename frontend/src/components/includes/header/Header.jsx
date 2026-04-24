import React, { useEffect, useState } from 'react'

export default function Header() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up the interval
    const timer = setInterval(() => {
      setTime(new Date());
    }, 10);
    
    console.log('timer')

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="">
            <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
   
            <div className="container-fluid bg-dark px-5">
                <div className="row gx-4 d-none d-lg-flex">
                    <div className="col-lg-6 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}} >
                                <small className="fa fa-map-marker-alt text-white"></small>
                            </div>
                            <small>123 Street, Magomeni, Tz</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}}>
                                <small className="fa fa-envelope-open text-white"></small>
                            </div>
                            <small>namexTechnology@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <div className="btn-sm-square rounded-circle  me-2" style={{backgroundColor:"blue"}}>
                                <small className="fa fa-phone-alt text-white"></small>
                            </div>
                            <small>+225 78345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <div className="btn-sm-square rounded-circle me-2" style={{backgroundColor:"blue"}}>
                                <small className="far fa-clock text-white"></small>
                            </div>
                            <small className='text-white font-weight-bold' style={{fontWeight:"bold"}} >  {time.toLocaleTimeString()} </small>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )




}

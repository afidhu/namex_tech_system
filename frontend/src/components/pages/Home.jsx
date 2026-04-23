import React from "react";
import { useEffect } from 'react'

export default function Home() {
    
    useEffect(()=>{
        console.log('home')
    })
  return (
    <div className="container-fluid">
      <button className='btn btn-info bg-dark' >Home</button>
      <i className="fas fa-home"></i>
    </div>
  )
}

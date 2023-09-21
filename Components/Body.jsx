import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Body = () => {
  return (
    <>
    <div className="body">
      <h2 className='head'>Buy you'r Dream <spam>House</spam> </h2>
      <div className="box">
      <svg className='loc' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><style>svg'color:#d41646';</style><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <select>
          <option className='option' value="Manglore">Manglore</option>
        </select>
        <input className='search' type='search' placeholder='Search by city'></input>
        <select >
          <option className='option' value="">--City--</option>
          <option className='option' value="">Surathkal</option>
          <option className='option' value="">Mukka</option>
          <option className='option' value="">panambur</option>
        </select>
        <Link href=''><button className='S'>Search 🔍</button></Link>
      </div>
      <h2 className='p'>We've House, properties for you & you'r <span>Family</span></h2>
      <h2 className='heading' id='Surathkal'>Surathkal</h2>
      <div className="surathkal">
        <div className="frame">
        <div className="slider_1">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>2BHK Builder Apartment</h3>
        <h3 className='details'><strong>$41 Lac 4,678 sqft</strong> </h3>
        <h3 className='det'>Surathkal near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_2">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>3BHK Builder Apartment</h3>
        <h3 className='details'><strong>$59 Lac 5,000 sqft</strong> </h3>
        <h3 className='det'>Surathkal near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_3">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>3BHK Builder Apartment</h3>
        <h3 className='details'><strong>$51 Lac 500 sqft</strong> </h3>
        <h3 className='det'>Surathkal near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_4">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>3BHK Builder Apartment</h3>
        <h3 className='details'><strong>$51 Lac 500 sqft</strong> </h3>
        <h3 className='det'>Surathkal near police station</h3>
        </div>
        </div>
      </div>
      <h2 className='mukka-heading' id='Mukka'>Mukka</h2>
      <div className="surathkal">
        <div className="frame">
        <div className="slider_5">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>3BHK Builder Apartment</h3>
        <h3 className='details'><strong>$72 Lac 7,200 sqft</strong> </h3>
        <h3 className='det'>Mukka near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_6">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>8BHK Builder Apartment</h3>
        <h3 className='details'><strong>$91 Lac 5,200 sqft</strong> </h3>
        <h3 className='det'>Mukka near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_7">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>5BHK Builder Apartment</h3>
        <h3 className='details'><strong>$100 Lac 5,800 sqft</strong> </h3>
        <h3 className='det'>Mukka near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_8">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>2BHK Builder Apartment</h3>
        <h3 className='details'><strong>$1 CR 8,000 sqft</strong> </h3>
        <h3 className='det'>Mukka near police station</h3>
        </div>
        </div>
      </div>
      <h2 className='p-heading' id='panambur'>Panambur</h2>
      <div className="surathkal">
        <div className="frame">
        <div className="slider_9">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>5BHK Builder Apartment</h3>
        <h3 className='details'><strong>$59 Lac 4,500 sqft</strong> </h3>
        <h3 className='det'>Panambur near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_10">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>2BHK Builder Apartment</h3>
        <h3 className='details'><strong>$61 Lac 5,000 sqft</strong> </h3>
        <h3 className='det'>Panambur near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_11">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>5BHK Builder Apartment</h3>
        <h3 className='details'><strong>$51 Lac 4,000 sqft</strong> </h3>
        <h3 className='det'>Panambur near police station</h3>
        </div>
        </div>
        <div className="frame">
        <div className="slider_12">
        <Link href='http://localhost/real_estate-login/login.php'><button className='Explore'>Explore Now</button></Link>
        <h3 className='detail'>3BHK Builder Apartment</h3>
        <h3 className='details'><strong>$49 Lac 7,000 sqft</strong> </h3>
        <h3 className='det'>Panambur near police station</h3>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Body
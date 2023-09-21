import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="full-screen">
    <div className="border">
      <h2>SignUp</h2>
      <input className='email' type='text' placeholder='Email Address'></input>
      <input className='email' type='password' placeholder='Password'></input>
      <input className='email' type='password' placeholder='Confirm password'></input>
      <Link href=''><button className='sub'>Submit</button></Link>
    </div>
    </div>
    </>
  )
}

export default page
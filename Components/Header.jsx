import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <nav>
      <Link href='' className='teamname'>SUIET</Link>
      <a className='item-home'>Home</a>
      <Link className='item' href='/About'>About</Link>
      <Link className='item' href='http://localhost/real_estate-login/login.php'>House</Link>
      <Link className='item' href='https://www.figma.com/file/Gz66GS8325ZjEPA2C3Ty3H/Real-estate?type=design&node-id=0%3A1&mode=design&t=5qtuf8K7SOdHTexd-1'>Properties</Link>
      <Link className='item' href='http://localhost/real_estate-login/login.php'>Login</Link>
    </nav>
    </>
  )
}

export default Header
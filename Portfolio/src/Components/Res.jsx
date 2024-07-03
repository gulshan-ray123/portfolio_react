import React from 'react'
import { Link,NavLink } from 'react-router-dom';
function Res() {
  return (
    <div>
        <nav className=' bg-black opacity-85 h-[610px] md:hidden'>
    <div className=' text-white flex justify-center ml-[130px] absolute top-28 text-2xl flex-col pl-2 animate-pulse delay-700 gap-12'>
    <NavLink to='/' className={()=>"mt-2"}>Home</NavLink>
    <NavLink to='/About' className={()=>"mt-2"}>About</NavLink>
    <NavLink to='/Skills' className={()=>"mt-2"}>Skills</NavLink>
    <NavLink to='/Project' className={()=>"mt-2"}>Projects</NavLink>
    <NavLink to='/Blogs' className={()=>"mt-2"}>Blogs</NavLink>
    <Link to='https://github.com/gulshan-ray123/portfolio_react' className={()=>"mt-2"}>Portfolio link</Link>
    </div>
  </nav>
    </div>
  )
}

export default Res

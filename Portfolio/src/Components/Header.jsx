import React from 'react'
import { Link,NavLink } from 'react-router-dom';
function Header() {

  return (
   
    <div>
        <nav className="hidden md:h-auto w-100 md:block bg-black opacity-85">
<div className="text-white flex justify-end me-36 gap-10">
    <a to="#"    className="md: font-semibold text-amber-50 text-3xl me-[600px] justify-start">Portfolio</a>
    <NavLink to='/' className={()=>"m-4 hover:text-orange-600 md:flex hidden"}>Home</NavLink>
    <NavLink to='/About' className={({isActive}) =>"m-4  hover:text-orange-600 md:flex hidden"}>About</NavLink>
    <NavLink to="/Skills" className={()=>"m-4 hover:text-orange-600 md:flex hidden"}> Skills</NavLink>
    <NavLink to="/Project" className={()=>"m-4 hover:text-orange-600 md:flex hidden"}> Projects</NavLink>
    <NavLink to="/Blogs" className={()=>"m-4 hover:text-orange-600 md:flex hidden"}>Blogs</NavLink>
    {/* <NavLink to="#" className={()=>"m-4 hover:text-orange-600 md:flex hidden"}>Contact</NavLink> */}
</div>
  </nav>
  <nav  className="block bg-black opacity-85 h-auto md:h-auto w-100 md:hidden" >
<div className="text-white flex justify-start gap-44  pl-2">
    <a to="#" className="font-semibold text-amber-50 text-2xl block">Portfolio</a>
    
   <button className='bg-yellow-600 rounded pl-2 pr-2 mt-2 hover:text-orange-700 hover:bg-green-400 hover:transition-all hover:delay-100 '> <NavLink to='/Menu'>Menu</NavLink></button>
   
  
</div>
  </nav>

    </div>
  )
}

export default Header

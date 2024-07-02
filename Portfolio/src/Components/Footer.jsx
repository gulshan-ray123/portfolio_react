import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer className=' h-auto  md:h-auto bg-black opacity-85'>
 <h2 className='text-white flex justify-center flex-row font-sans text-2xl'>Contact Us</h2>
 <div className='h-20 w-full flex justify-center'>
 <Link to='https://www.facebook.com/gulshanray2003'><i class="fa-brands fa-square-facebook text-white text-3xl mt-5 opacity-30 hover:opacity-100"></i></Link>
 <Link to='https://www.linkedin.com/in/gulshan-kumar-ray-5243072b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin text-white text-3xl mt-5 ml-5 opacity-30 hover:opacity-100"></i></Link>
 <Link to='https://x.com/Gulshan83816998?t=yGBduGbzmEdO1B_oFnaN6g&s=09'><i class="fa-brands fa-square-x-twitter text-white text-3xl mt-5 ml-5 opacity-30 hover:opacity-100"></i></Link>
 <Link to='https://wa.me/9354330996?text="Hello"'><i class="fa-brands fa-square-whatsapp text-white text-3xl mt-5 ml-5 opacity-30 hover:opacity-100"></i></Link>
 <Link to='https://www.instagram.com/raygulshan2003'><i class="fa-brands fa-square-instagram text-white text-3xl mt-5 ml-5 opacity-30 hover:opacity-100"></i></Link>
 </div>
 <h1 className='text-white flex justify-center text-sm'>All right reserved</h1>
</footer>
    </div>
  )
}

export default Footer

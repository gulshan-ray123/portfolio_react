import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Home() {

  return (
    <div>
      <main className="md:h-full w-full bg-black opacity-85">
    <div>
      <div className="flex justify-center h-[610px] pl-14     md:flex md:justify-end mr-20">
      
      <div className="h-[340px] w-[290px] border-green-800 drop-shadow-2xl block  bg-[url('gulshan_preview_rev_1.png')] bg-cover md:hidden"></div>
      <div className= " hidden md:h-[400px] w-[400px] mr-20 mt-24 md:flex md:bg-sky-500 rounded-[50%] bg-[url('gulshan_preview_rev_1.png')] bg-cover hover:shadow-2xl hover:border-2 hover: border-yellow-600"></div>
      </div> 
        <div className=" hidden md:text-teal-50 ml-44 md:absolute bottom-40 md:block">
            <h4 className='text-yellow-500 font-serif text-2xl'>Hello !</h4>
            <h1 className="text-white  font-bold text-4xl">I'm</h1> <h1 className="text-yellow-200         md:text-orange-400  font-bold text-4xl">Gulshan Kumar<br/> Ray</h1>
            <h3 className="md:mt-6  text-lg font-light text-white">A B.Tech student and a tech enthuasiast </h3>
           
          <Link to='mailto:gk0507818@gmail.com'> <button className="border-2 w-32 h-10 rounded-3xl text-teal-100 block m-4 hover:bg-yellow-300 delay-150 transition-all hover:text-black">Work with me</button></Link> 
            <NavLink to='/Project'> <button className="border-2 w-24 h-10 rounded-3xl text-teal-100 inline-block m-4 hover:bg-yellow-300 delay-150 transition-all hover:text-black">My Works</button></NavLink>
        </div>
        <div className=" inline absolute top-80 md:text-teal-50 ml-38 p-5 md:absolute bottom-44 md:hidden">
            <h4 className='text-yellow-500 font-serif text-lg'>Hello !</h4>
            <h1 className="text-white  font-bold text-4xl">I'm</h1> <h1 className="text-yellow-200         md:text-orange-400  font-bold text-4xl">Gulshan Kumar<br/> Ray</h1>
            <h3 className="mt-6  text-lg font-light text-white">A B.Tech student and a tech enthuasiast </h3>
           
           <Link to='mailto:gk0507818@gmail.com'><button className=" inline border-2 w-32 h-10 rounded-3xl text-teal-100  m-4 hover:bg-yellow-300 delay-150 transition-all hover:text-black">Work with me</button></Link>
          <NavLink to='/Project'> <button className="border-2 w-24 h-10 rounded-3xl text-teal-100 inline-block m-4 hover:bg-yellow-300 delay-150 transition-all hover:text-black">My Works</button></NavLink> 
        </div>  
    </div>
  </main>
    </div>
  )
}

export default Home

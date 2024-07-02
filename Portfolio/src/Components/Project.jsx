import React from 'react'
import { NavLink } from 'react-router-dom'

function Project() {
  return (
    
        <body>
      <main className=' hidden md:w-full h-[610px] bg-black opacity-85 md:block'>
        <h1 className='flex justify-center text-cyan-100 font-bold text-2xl absolute top-24 ml-[710px]'>My Projects</h1>
        <h1 className='flex justify-center text-cyan-100 font-bold text-4xl absolute top-28 ml-[680px] opacity-15'>My Projects</h1>
        <div className='flex'>
            <div className="h-28 w-60 bg-slate-500 rounded-md absolute top-[370px] ml-20 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-2 text-green-300 mt-5  '>Patient Health Tracker Website</h1><NavLink to='/Proj_health'><button className='bg-green-400 rounded-lg flex ml-20 mt-2 '>Click Here</button></NavLink><h1 className='flex justify-center text-yellow-100 text-xs mt-3'>Click Here</h1></div>
        </div>
        
        <div className='flex justify-between'>
            <div className="h-60 w-60 bg-slate-500 rounded-md absolute top-52 ml-20 bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/doctor-5565584-4715129.png')] bg-cover hover:bg-red-400"></div>
           
        </div>
        <div className='flex justify-center'>
            <div className="h-28 w-60 bg-slate-500 rounded-md absolute top-[370px] ml-20 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-6 text-green-300 mt-5  '>Bank management System</h1><NavLink to='/Project_bank'> <button className='bg-green-400 rounded-lg flex ml-20 mt-2 '>Click Here</button></NavLink><h1 className='flex justify-center text-yellow-100 text-xs mt-3'>Click Here</h1></div>
        </div>
        
        <div className='flex justify-center'>
            <div className="h-60 w-60 bg-slate-500 rounded-md absolute top-52 ml-20 bg-[url('https://static.vecteezy.com/system/resources/previews/015/214/718/original/bank-3d-illustration-icon-png.png')] bg-cover hover:bg-red-400"></div>
        </div>
        <div className='flex justify-end mr-20'>
            <div className="h-28 w-60 bg-slate-500 rounded-md absolute top-[370px] ml-20 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-5 text-green-300 mt-5  '>Upcoming SemPrep</h1> <button className='bg-green-400 rounded-lg flex ml-20 mt-2 '>Click Here</button><h1 className='flex justify-center text-yellow-100 text-xs mt-3'>Click Here</h1></div>
        </div>
        <div className='flex justify-end'>
            <div className="h-60 w-60 bg-slate-500 rounded-md absolute top-52 mr-20"></div>
        </div>
      </main>
      <main className=' block md:w-full h-[1100px] bg-black opacity-85 md:hidden'>
        <h1 className='flex justify-center text-cyan-100 font-bold text-3xl absolute top-14 ml-[120px]'>My Projects</h1>
        <h1 className='flex justify-center text-cyan-100 font-bold text-6xl absolute top-16 ml-[100px] opacity-15'>My Projects</h1>
        <div className='flex'>
            <div className=" h-24 w-52 bg-slate-500 rounded-md absolute top-[340px] ml-20 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-2 text-green-300 mt-5 text-sm  '>Patient Health Tracker Website</h1><NavLink to='/Proj_health'> <button className='bg-green-400 rounded-lg flex ml-16 mt-2 '>Click Here</button></NavLink><h1 className='flex justify-center text-yellow-100 text-xs mt-2'>Click Here</h1></div>
        </div>
        
        <div className='flex flex-col justify-between'>
            <div className=" h-52 w-52 bg-slate-500 rounded-md absolute top-52 ml-20 bg-[url('https://cdn3d.iconscout.com/3d/premium/thumb/doctor-5565584-4715129.png')] bg-cover hover:bg-red-400"></div>
           
        </div>
        <div className='flex justify-center'>
            <div className="h-24 w-52 bg-slate-500 rounded-md absolute top-[645px] ml-15 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-6 text-green-300 mt-5 text-sm '>Bank management System</h1><NavLink to='/Project_bank'> <button className='bg-green-400 rounded-lg flex ml-16 mt-2 '>Click Here</button></NavLink><h1 className='flex justify-center text-yellow-100 text-xs mt-2'>Click Here</h1></div>
        </div>
        
         <div className='flex justify-center'>
             <div className="h-52 w-52 bg-slate-500 rounded-md absolute top-[510px] ml-15 bg-[url('https://static.vecteezy.com/system/resources/previews/015/214/718/original/bank-3d-illustration-icon-png.png')] bg-cover hover:bg-red-400"></div>
         </div>
        <div className='flex justify-end mr-20'>
            <div className="h-24 w-52 bg-slate-500 rounded-md absolute top-[960px] ml-20 hover:translate-y-14 transition-all  hover:bg-red-400"><h1 className='ml-10 text-green-300 mt-3 text-sm '>Upcoming SemPrep</h1> <button className='bg-green-400 rounded-lg flex ml-20 mt-2 '>Click Here</button><h1 className='flex justify-center text-yellow-100 text-xs mt-2'>Click Here</h1></div>
        </div>
        <div className='flex justify-end'>
            <div className="h-52 w-52 bg-slate-500 rounded-md absolute top-[820px] mr-20"></div>
        </div>  
      </main>
      </body>
    
  )
}

export default Project

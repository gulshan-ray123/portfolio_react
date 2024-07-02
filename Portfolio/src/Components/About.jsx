import React from 'react'

function About() {
  return (
     <>
     <body className="bg-black opacity-85 h-[700px]">
  <div className=" hidden md:block">
      <div className=" hidden md:flex justify-center">
           <h1 className="font-bold text-white text-6xl mt-20 absolute left-2/4 ">About me</h1><br/>
          <h1 className="font-bold text-white text-8xl mt-24 ml-[420px] opacity-15">About Me</h1>
      </div>
      <p className="text-white justify-end flex mr-10  font-light text-lg">I am Gulshan Kumar Ray B.Tech 2nd Year Student and enthusiastic Web Devloper participated in multiple <br/>hackathons and member of SSOC</p>
      <table  className="border-1 text-white   mt-12 ml-[750px] text-xl h-auto">
        <tr>
          <td>College:</td>
          <td className="opacity-45">GNIOT Gr.Noida</td>
        </tr>
        <tr>
          <td>University:</td>
          <td className="opacity-45">Dr. APJ Abdul Kalam Technical University Lucknow</td>
        </tr>
        <tr>
          <td>Branch:</td>
          <td className="opacity-45">Computer Science and Engineering</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td className="opacity-45">+91 9354330996</td>
        </tr>
        <tr>
          <td>Email</td>
          <td className="opacity-45">gk0507818@gmail.com</td>
        </tr>
      </table>
      <button className="w-32 h-12 border-2 bg-black opacity-95 border-x-white text-white rounded-2xl absolute left-1/2 mt-8 hover:bg-yellow-500 hover:transition-all hover:delay-100 hover:text-black hover:border-1">Download CV</button>
  </div>
  <div className=" md:w-80 h-96 bg-slate-800 rounded-xl absolute top-44 ml-48 bg-[url('./src/profile.jpg')] bg-cover hover:border-2 shadow-slate-50"></div>
  <div className="block md:hidden">
    <div className="flex justify-center">
         <h1 className="font-bold text-white text-5xl  absolute ml-4 ">About me</h1><br/>
        <h1 className="font-bold text-white text-6xl mt-5 ml-[60px] opacity-15">About Me</h1>
    </div>
    <div className="w-44 h-52 bg-slate-800 rounded-xl absolute top-28 ml-24 bg-[url('profile.jpg')] bg-cover hover:border-2 shadow-slate-50"></div>
    <p className="text-white justify-start flex  mt-52 p-3 font-light text-base text-justify">I am Gulshan Kumar Ray B.Tech 2nd Year Student and enthusiastic Web Devloper participated in multiple hackathons and member of SSOC</p>
    <table className="border-1 text-white  mt-4 ml-14 text-base">
    <tr>
          <td>College:</td>
          <td className="opacity-45">GNIOT Gr. Noida</td>
        </tr>
        <tr>
          <td>University:</td>
          <td className="opacity-45">Dr. APJ Abdul Kalam Technical University Lucknow</td>
        </tr>
        <tr>
          <td>Branch:</td>
          <td className="opacity-45">Computer Science and Engineering</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td className="opacity-45">+91 9354330996</td>
        </tr>
        <tr>
          <td>Email</td>
          <td className="opacity-45">gk0507818@gmail.com</td>
        </tr>
    </table>
    <button className="w-32 h-12 border-2 bg-black opacity-95 border-x-white text-white rounded-2xl absolute left-1/4 mt-4 hover:bg-yellow-500 hover:transition-all hover:delay-100 hover:text-black hover:border-1">Download CV</button>
</div>
</body>
     </>
  )
}

export default About

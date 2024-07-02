import React from 'react'

function Blogs() {
  return (
   
      <body className='md:h-[610px] w-full bg-black opacity-85'>
        <h1 className='text-6xl text-white font-bold flex justify-center relative top-10'> Blogs</h1>
        <h1 className='text-7xl text-white font-bold flex justify-center  opacity-15'> Blogs</h1>
        <div className='w-full  p-16 rounded-lg pt-0'>
          <h1 className='text-black text-base  w-[270px] rounded-lg md:text-black md:text-3xl bg-yellow-300 md:w-[620px] font-extrabold'>Topic: Search Engine Optimization</h1>
        <h1 className='text-base text-green-50 font-mono flex justify-center mt-10 text-justify'> As digital landscape continues to evolve,search engine optimization i.e SEO is one of the important aspect in marketing of technology. Search engines like Google,Bing and Yahoo process billions of searchs everyday. According to a report by Hubspot, 61% of marketing consider SEO a crucial part of their marketing strategy.
          <br/></h1>
          <b className='text-green-400 text-lg'>Compelling Reasons why SEO matters: </b>
          <ul>
            <li ><h1 className='text-orange-200 text-base'>Increase Visiblity:</h1><p className='text-green-50 '>SEO helps your website appear in search Engine result pages,making it more visible to targeted audience.</p></li>
            <li><h1 className='text-orange-200 text-base'>Targeted traffic :</h1> <p className='text-green-50 '>By Optimizing your website for specific keywords, you can attract targeted traffic that is more likely to convert into leads or sales.</p></li>
            <li><h1 className='text-orange-200 text-base'>Brand-Crediblity:</h1><p className='text-green-50 '>A high-ranking website is percieved as more credible and trustworthy by serach engine users.</p></li>
          </ul>
          <b className='text-green-400 text-lg'>How it works:</b>
          <p className='text-base text-green-50 font-mono flex justify-center mt-2 text-justify'> Search engines like google,bing etc use software programs called "crawlers" or "spider" to continously scan and index the web for new and updated content.The crawled content then stored in massive databases called indexes,which are used to generate search results.Thereafter when any user seraches for any query in their browser. The search engine's algorithm retrieves a list of relevab=nt document from the indexes.The retrieval document are then ranked in order of relevance,authority,and other factors to provide the best possible result to user and all this processes took place in millisecounds</p>
          </div>
      </body>

  )
}

export default Blogs

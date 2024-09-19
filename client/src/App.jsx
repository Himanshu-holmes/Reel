import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-slate-800'>
    <nav className="flex justify-between bg-red-500/10 p-4">
      <div className=" text-pink-600 ml-10 ">reel</div>
      <div className="flex justify-around gap-2 mr-10 ">
          <a href="./index.html" className="text-gray-600 hover:text-white">Home</a>
          <a href="./reel.html" className="text-gray-600 hover:text-white">Reel</a>
          <a href="./about.html" className="text-gray-600 hover:text-white">About</a>
      </div>
      
    </nav>
      <div className="flex justify-center  min-h-[90vh]">
          <div className="bg-red-500/10 p-4 rounded-lg m-2">
          <h1 className="text-4xl font-bold text-red-500">Reel</h1>
      
  
          <div className="relative min-w-96 max-w-full justify-center flex">
              <div className="absolute  z-10 top-96  left-[20rem] flex flex-col gap-5">
                 <div> <button> <i className="fa fal fa-comment text-amber-950 text-2xl"></i></button></div>
              <div><button><i className="fa fa-thin fa-heart text-amber-950 text-2xl"></i></button></div>
              <div><button><i className="fa fa-thin fa-share text-amber-950 text-2xl"></i></button></div>
              </div> 
              <video className="rounded-lg h-[80vh] w-80" controls>
                  <source src="reel.mp4" type="video/mp4"/>
              </video>        
          </div>
      </div>
  </div>
  </div>
  )
  
}

export default App

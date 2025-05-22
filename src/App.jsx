import React from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full max-w-4xl'>
       <div className='flex flex-col gap-5 justify-end h-screen px-10 py-10 '>
      <h1 className='text-4xl font-semibold text-purple-950 '>Welcome to App</h1>
      <p className='font-semibold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate reprehenderit maiores doloribus dolor, soluta odit quia, voluptatem, provident dignissimos nulla praesentium laboriosam minima debitis qui illo accusamus. Aperiam, cupiditate quaerat.</p>
    <div 
    
    className='flex flex-col gap-5'>
      <button
      onClick={()=> navigate("/signup")}
      className='bg-purple-700 rounded-br-2xl rounded-bl-2xl py-3 text-white text-xl font-semibold'>Create Account</button>
      <button 
    onClick={()=> navigate("/login")}
      className="bg-purple-700 rounded-tr-2xl rounded-tl-2xl py-3 text-white text-xl font-semibold">Already Register? Login</button>
    </div>
    </div>

    </div>
    </>
  )
}

export default App
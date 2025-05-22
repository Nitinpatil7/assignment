import React, { useContext } from 'react';
import { Statecontext } from '../context/Statecontext';

const Display = () => {
  const { signupdata } = useContext(Statecontext);

  if (!signupdata?.name) {
    return (
      <div className="p-6 max-w-md mx-auto text-gray-800">
        <p className="text-red-600 font-medium">No User, Please sign up first.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto text-gray-800 border-4 border-green-400 mt-10 rounded-2xl px-5 py-5">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Account Setting: </h1>
       
       <div className='flex mt-10'>
        <div>
          <img className='h-30 border-green-200 border-8+ rounded-full' src="images.jpg" alt="" />

        </div>
        <div className='flex flex-col mt-3 ml-2'>
          <h1 className='font-semibold text-2xl'>{signupdata.name}</h1>
          <h2 className='text-lg font-semibold text-gray-700'>{signupdata.email}</h2>
        </div>
       </div>
       <p className='text-lg font-semibold text-gray-600 pt-5 px-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint tenetur voluptatibus beatae nam impedit eos ad doloremque! Sit labore distinctio dolores molestias architecto, autem impedit, officiis provident iusto sequi harum?</p>
    </div>
  );
};

export default Display;

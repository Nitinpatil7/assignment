import React, { useState , useContext } from 'react';
import { Statecontext } from '../context/Statecontext';
import { useNavigate } from 'react-router-dom';
useNavigate
const Signup = () => {
  const navigate = useNavigate();
  const {setsignupdata } = useContext(Statecontext)
  const [form, setForm] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const isFormFilled = Object.values(form).every((value) => value.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setsignupdata(form);
    console.log('Signup Data:', form);
    navigate("/home")
    
  };



  return (
    <div className="min-h-screen w-full flex flex-col  items-center  bg-white px-4 mt-10 ">
      <div className="w-full max-w-md text-gray-800 space-y-5 border-2 px-10 py-10 rounded-2xl border-purple-400">
        <h2 className="text-3xl font-bold max-w-2xs  mb-6">Create your App Account</h2>

        <label className='font-semibold text-purple-700 px-2 py-2'>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleChange}
        />

         <label className='font-semibold text-purple-700 px-2 py-2'>Phone Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleChange}
        />
 <label className='font-semibold text-purple-700 px-2 py-2'>Email Address</label>
       
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleChange}
        />
 <label className='font-semibold text-purple-700 px-2 py-2'>Password</label>
       
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleChange}
        />
 <label className='font-semibold text-purple-700 px-2 py-2'>Company Name</label>
       
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={handleChange}
        />

        <div className="flex items-center justify-between mt-2">
          <label className="text-md font-medium">Are you an agency?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="agency"
                value="yes"
                onChange={handleChange}
                className="accent-purple-700"
              />
              Yes
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="agency"
                value="no"
                onChange={handleChange}
                className="accent-purple-700"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormFilled}
          className={`w-full py-3 mt-6 rounded-xl text-white text-lg font-semibold transition duration-300 ${
            isFormFilled
              ? 'bg-purple-700 hover:bg-purple-800'
              : 'bg-purple-300 cursor-not-allowed'
          }`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

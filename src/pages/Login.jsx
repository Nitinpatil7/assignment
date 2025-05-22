
import React, { useState , useContext } from 'react';
import { Statecontext } from '../context/Statecontext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  const {  signupdata} = useContext(Statecontext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormFilled = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    // your login logic here
    console.log('Logging in with:', { email, password });
   
   if(signupdata.email === email && signupdata.password === password){
    navigate("/home");
   }else{
    navigate("/signup");
   }
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="bg-white border-purple-500 border-4 rounded-2xl p-8 w-full max-w-4xl mt-[10%] mx-15 ">
        <h2 className="text-3xl   mb-2">Signin to your <span className=' text-purple-700 text-4xl font-semibold'>App</span> Account</h2>
        <h3 className='text-xl font-semibold text-gray-600 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={!isFormFilled}
            className={`w-full py-3 mt-2 rounded-xl text-white text-lg font-semibold transition-colors duration-300 ${
              isFormFilled ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-300 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

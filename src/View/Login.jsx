import React from 'react';

const Login = () => {
  return (
    <div className=''>
        <div className='flex mx-60 my-52 login'>
            <div className='w-1/2 bg-yellow-500'>
                hello
            </div>
            {/* Right Side with Form */}
        <div className="w-1/2 p-8 px-20 py-20 ">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">Login</h2>
          
          <form>
           
            
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600" 
                placeholder="Email address..." 
              />
            </div>

            

            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600" 
                placeholder="Password..." 
              />
            </div>

           

            

            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
              Login
            </button>

           
          </form>
        </div>

        </div>
    </div>
  );
};

export default Login;
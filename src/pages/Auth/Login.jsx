import React, { useState } from 'react'

const Login = () => {

    const [login, setLogin] = useState({
        email        :   'email',
        password    :   'password'
    });
    
    const handleLogin = function(e){
        setLogin({
            ...login, [e.target.name] : [e.target.value]
        })
    }

  return (
      <div className="w-full h-full pt-12 bg-gray-200 px-2">
        <div className="mx-auto w-full md:w-96 rounded-lg bg-white shadow border-3 py-4 px-4">
            <div className="text-2xl font-medium pt-4 pb-2">
                Sign In 
            </div>
            <div className="pt-4">
                <label className='block' htmlFor="email">Email :</label>
                <input value={login.email} onChange={handleLogin} placeholder='john@email.com' className='text-sm border rounded py-2 px-2 bg-white w-full' type="email" name="email" id="email" />
            </div>
            <div className="pt-4">
                <label className='block' htmlFor="password">Password :</label>
                <input value={login.password} onChange={handleLogin} placeholder='password' className='text-sm border rounded py-2 px-2 bg-white w-full' type="password" name="password" id="password" />
            </div>
            <button className='w-full bg-green-600 text-white py-2 text-center rounded-lg border-2 border-green-700 hover:bg-green-700 my-8'>
                Se Connecter
            </button>
        </div>          
      </div>

  )
}

export default Login
import React, { useState } from 'react'
import { Facebook, AtSign, Eye, EyeOff } from 'react-feather';

const Login = () => {

    const [login, setLogin] = useState({
        email        :   '',
        password    :   ''
    });
    
    const [showPwd, setShowPwd] = useState(true)

    const handleLogin = function(e){
        setLogin({
            ...login, [e.target.name] : [e.target.value]
        })
    }
    const handleShowPwd = function(){
        setShowPwd(!showPwd)
    }

  return (
      <div className="w-full h-full pt-12 px-2 bg-gray-100">
        <div className="mx-auto w-full md:w-96 rounded-lg bg-white shadow border-3 pt-8 pb-12 px-4">
            <form>
                <div className="text-2xl font-bold pt-4 pb-2 text-center text-gray-800" style={{'fontFamily':"Poppins"}}>
                    Sign In
                </div>
                <div className="pt-4">
                    <label className='block' htmlFor="email">Email :</label>
                    <input required value={login.email} onChange={handleLogin} placeholder='john@email.com' className='text-sm border rounded py-2 px-2 bg-white w-full' type="email" name="email" id="email" />
                </div>
                <div className="pt-4 relative">
                    <label className='block' htmlFor="password">Password :</label>
                    <input required value={login.password} onChange={handleLogin} placeholder='password' className='text-sm border rounded py-2 px-2 bg-white w-full' type="password" name="password" id="password" />
                    {showPwd && <Eye onClick={handleShowPwd} className='absolute bottom-2 right-1 text-gray-400 p-1 cursor-pointer hover:text-gray-600' />}
                    <EyeOff onClick={handleShowPwd} className='absolute bottom-2 right-1 text-gray-400 p-1 cursor-pointer hover:text-gray-600' />
                </div>
                <div className="text-right text-gray-400 py-2 cursor-pointer hover:text-gray-600">
                    Forgot password?
                </div>
                <button type='submit' className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 text-center rounded-xl my-8'>
                    Se Connecter
                </button>
            </form> 

            <div className="text-lg font-medium pt-4 pb-12 text-center text-gray-600">
                Or Sign Up Using
                <div className="flex justify-center items-center gap-2 py-4">
                    <Facebook className='rounded-full bg-blue-400 text-white h-10 w-10 p-2 cursor-pointer hover:border' />
                    <AtSign className='rounded-full bg-red-400 text-white h-10 w-10 p-2 cursor-pointer hover:border' />
                </div>
            </div>

            <div className="text-sm font-medium pt-4 pb-2 text-center text-gray-400 hover:underline cursor-pointer">
                Create New Account
            </div>

        </div> 

      </div>

  )
}

export default Login
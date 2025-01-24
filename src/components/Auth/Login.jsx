import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('email:',email)
        console.log('password:',password)
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                handleSubmit(e)
            }} 
            className='flex items-center justify-center flex-col'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter email' />
                <input
                 value={password}
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
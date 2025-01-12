import React from 'react'
import Login from '../../components/login/Login'
import Signup from '../../components/signup/Signup'

const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='border-2 border-slate-800 bg-slate-800 text-white p-3 font-semibold text-xl'>
            Welcome To Gym Management System
        </div>
        <div className='w-full bg-cover flex justify-center h-[100%] bg-[url("https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_1280.jpg")]'>
        <div className='w-full lg:flex gap-32'>

        <Login />

           <Signup />

        </div>
        </div>
    </div>
  )
}

export default Home
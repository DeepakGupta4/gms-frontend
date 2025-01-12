import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation } from 'react-router-dom';

const Sidebar = () => {

    const [greeting, setGreeting] = useState("")
    const location = useLocation(); //get the current location
    
    const greetingMessage = () =>{
        const currentHour = new Date().getHours();
        if(currentHour < 12) {
            setGreeting("Good Morning 🌞")
        }else if(currentHour < 18) {
            setGreeting("Good Afternoon 🌞")
        } else {
            setGreeting("Good Night 🌜")
        }
    }
    useEffect(()=>{
        greetingMessage()
    },[])


  return (
    <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5'>
        <div className='text-center text-3xl font-extralight'>
            Power Zone
        </div>
        <div className='flex gap-5 my-5'>
            <div className='w-[100px] h-[100px] rounded-lg'>
                <img className='w-full h-full rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyO3ozKIb63TqA2K1h-EdYj0XexHz4zhoOg&s' alt='Gym pic' />
            </div>
            <div>
                <div className='text-2xl'>{greeting}</div>
                <div className='text-xl font-semibold mt-1'>Admin</div>
            </div>
        </div>
        <div className='mt-10 py-10 border-t-2 border-gray-700'>
            <Link to={'/dashboard'} className={`flex gap-6 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/dashboard"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div><HomeIcon /></div>
                <div>DashBoard</div>
            </Link>
            <Link to={'/member'} className={`flex mt-6 gap-6 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/member"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div><PeopleAltIcon /></div>
                <div>Members</div>
            </Link>
            <div className='flex mt-6 gap-6 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                <div><LogoutIcon /></div>
                <div>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
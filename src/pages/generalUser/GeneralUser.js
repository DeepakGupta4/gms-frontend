import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MemberCard from '../../components/membercard/MemberCard';

const GeneralUser = () => {
    const [header, setHeader] = useState("")

    useEffect(()=>{
        const func = sessionStorage.getItem('func');
        functionCall(func)
    },[])

    const functionCall = async(func)=>{
        switch (func){
            case "monthlyJoined":
                setHeader("Monthly Joined Members")
                break;
            case "threeDayExpire":
                setHeader("Expiring In 3 Days Members")
                break;
            case "fourToSevenDaysExpire":
                setHeader("Expiring In 4-7 Days Members")
                break;   
            case "expired":
                setHeader ("Expired Members")
                break;
            case "inActiveMembers":
                setHeader("InActive members")
                break;
        }
    }

  return (
    <div className='text-black p-5 w-3/4 flex-col'>
        <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
            <Link to={'/dashboard'} className='border-2 pl-3 pr-3 pt-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                <ArrowBackIcon /> Back To DashBoard
            </Link>
        </div>
        <div className='mt-5 text-xl text-slate-900'>
            {header}

        </div>

        <div className='bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[80%]'>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
        </div>
    </div>
  )
}

export default GeneralUser
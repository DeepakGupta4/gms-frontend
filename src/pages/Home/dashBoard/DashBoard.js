import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ErrorIcon from '@mui/icons-material/Error';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';



const DashBoard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false)
  const ref = useRef();

  useEffect(()=>{
    const checkIfClickedOutside = e =>{
      if(accordianDashboard && ref.current && !ref.current.contains(e.target)){
        setAccordianDashboard(false)
      }
    }
    document.addEventListener("mousedown",checkIfClickedOutside)
    return ()=>{
      document.removeEventListener("mousedown",checkIfClickedOutside)
    }
  },[accordianDashboard])
    

  return (
    <div className='w-3/4 text-black p-5 relative'>
        <div className='w-full bg-slate-900 text-white rounded-lg flex p-3 justify-between items-center'>
          <MenuIcon sx={{cursor:"pointer"}} onClick={()=>{setAccordianDashboard(prev=>!prev)}} />
            <img className='w-8 h-8 rounded-3xl border-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd3ownZE-mMN2BXJ-_jlEphuE6HiKKlg2lOg&s' alt='logo' />

        </div>

        {
          accordianDashboard && <div ref={ref} className='absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight'>
          <div>Hii Welcome to our Gym Management System.</div>
          <p>Feel Free to ask any querries</p>

        </div>
        }

        <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>
{/* this is the card block */}
          <Link to={'/member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <PeopleAltIcon sx={{color:"green",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>Joined Members</p>
              </div>
          </Link>
          <div className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <SignalCellularAltIcon sx={{color:"purple",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>Monthly Joined</p>
              </div>
          </div>
          <div className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <AccessAlarmsIcon sx={{color:"red",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>Expiring within 3 Days</p>
              </div>
          </div>
          <div className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <AccessAlarmsIcon sx={{color:"red",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>Expiring within 4-7 days</p>
              </div>
          </div>
          <div className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <ReportIcon sx={{color:"red",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>Expired</p>
              </div>
          </div>
          <div className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
              <div className='h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>

              <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                <ReportIcon sx={{color:"brown",fontSize:"50px"}} />
                <p className='text-xl my-3 font-semibold font-mono'>InActive Members</p>
              </div>
          </div>

        </div>

        <div className='md:bottom-4 p-4 w-3/4 mb-4 md:mb-0 absolute bg-slate-900 text-white mt-20 rounded-xl text-xl'>
          Contact Developer for any Technical Error at +919369560031
        </div>
    </div>
  )
}

export default DashBoard
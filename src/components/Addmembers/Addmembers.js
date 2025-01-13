import React, { useState } from 'react'

const Addmembers = () => {
   const [inputField, setInputField] = useState({name:"", mobileNo:"", address:"", profilePic:"", joiningDate:""});
  
    const handleOnchange = (event,name)=>{
      setInputField({...inputField,[name]:event.target.value})
    }
    console.log(inputField)


  return (
    <div className='text-black'>
        <div className='grid gap-5 grid-cols-2 text-lg'>

          <input value={inputField.name} onChange={(event)=>{handleOnchange(event,"name")}} placeholder='Name of the Joinee' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
          <input value={inputField.mobileNo} onChange={(event)=>{handleOnchange(event,"mobileNo")}} placeholder='Mobile No' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
          <input value={inputField.address} onChange={(event)=>{handleOnchange(event,"address")}} placeholder='Enter Address' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
          <input value={inputField.joiningDate} onChange={(event)=>{handleOnchange(event,"joiningDate")}} type='date' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />

          {/* drop down */}

          <select className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray'>
            <option>1 Month Membership</option>
            <option>2 Month Membership</option>
            <option>3 Month Membership</option>
          </select>

          <input type='file' />
          <div className='w-1/4'>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuqugb_wHBWBQZvkLM2wByTZ5uoVspswJ7z0KoqOupYq0W1h4evPU2LGrd1b0pf5y95g&usqp=CAU"} className='w-full h-full rounded-full' />
          </div>
          <div className='p-3 border-2 w-28 text-lg h-14 text-center bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Register</div>
        </div>
    </div>
  )
}

export default Addmembers
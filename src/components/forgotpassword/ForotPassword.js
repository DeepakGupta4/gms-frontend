import React, { useState } from "react";

const ForotPassword = () => {

    const [emailSubmit, setEmailSubmit] = useState(false)

    const [otpValidate, setOtpValidate] = useState(false)

    const [contentValue, setContentValue] = useState("Submit Your Email")

    const handleSubmit = ()=>{
        if(!emailSubmit){
            setEmailSubmit(true)
            setContentValue("Submit Your OTP")
        }else if(emailSubmit && !otpValidate){
            setOtpValidate(true)
            setContentValue("Submit Your NewPassword")
        }
    }
  return(
        <div className="w-full">
            <div className="w-full mb-5">
                <div>Enter Your Email</div>
                <input type='text' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter email' />
            </div>
            {
                emailSubmit && <div className="w-full mb-5">
                <div>Enter Your OTP</div>
                <input type='text' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter OTP' />
            </div>
            }
            {
                otpValidate && <div className="w-full mb-5">
                <div>Enter Your New Password</div>
                <input type='text' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter New Password' />
            </div>
            }

            <div className="bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold border-2 cursor-pointer hover:bg-white hover:text-black" onClick={()=>handleSubmit()}>{contentValue}</div>
        </div>
  )
};

export default ForotPassword;

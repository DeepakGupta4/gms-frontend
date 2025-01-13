import React, { useState } from "react";

const ForotPassword = () => {

    const [emailSubmit, setEmailSubmit] = useState(false)

    const [otpValidate, setOtpValidate] = useState(false)

    const [contentValue, setContentValue] = useState("Submit Your Email")

    const [inputField, setInputField] = useState({email: "", newPassword: ""});

    const handleSubmit = ()=>{
        if(!emailSubmit){
            setEmailSubmit(true)
            setContentValue("Submit Your OTP")
        }else if(emailSubmit && !otpValidate){
            setOtpValidate(true)
            setContentValue("Submit Your NewPassword")
        }
    }

    const handleOnchange = (event,name)=>{
        setInputField({...inputField,[name]:event.target.value})
    }
    console.log(inputField)

  return(
        <div className="w-full">
            <div className="w-full mb-5">
                <div>Enter Your Email</div>
                <input value={inputField.email} onChange={(event)=>{handleOnchange(event,"email")}} type='text' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter email' />
            </div>
            {
                emailSubmit && <div className="w-full mb-5">
                <div>Enter Your OTP</div>
                <input value={inputField.otp} onChange={(event)=>{handleOnchange(event,"otp")}} type='text' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter OTP' />
            </div>
            }
            {
                otpValidate && <div className="w-full mb-5">
                <div>Enter Your New Password</div>
                <input value={inputField.newPassword} onChange={(event)=>{handleOnchange(event,"newPassword")}} type='password' className='w-1/2  p-2 rounded-lg border-2 border-slate-400' placeholder='Enter New Password' />
            </div>
            }

            <div className="bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold border-2 cursor-pointer hover:bg-white hover:text-black" onClick={()=>handleSubmit()}>{contentValue}</div>
        </div>
  )
};

export default ForotPassword;

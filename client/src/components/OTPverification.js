import React, { useState } from 'react'
import '../styles/Registration.css'

const OTPverification = () => {
    
   const[verifyOTP , setVerifyOTP] = useState('');
   
   const handleVerify = (e)=>{
     e.preventDefault() ; 
     

      
   }



    return (
        <div className="otp-container">
            <h2>OTP Verification</h2>
            <form action="" method="post"  >
                <div className="form-group">
                    <label htmlFor="password">OTP</label>
                    <input type="text" value={verifyOTP} onChange={(e)=> setVerifyOTP(e.target.value )} />
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleVerify}>Verify</button>
                </div>
            </form>
        </div>
    )
}

export default OTPverification
import React, { useState } from 'react'
import '../styles/Registration.css'

const OTPverification = () => {

    const [verifyOTP, setVerifyOTP] = useState('');

    const handleOTPVerification = (e) => {
        e.preventDefault();

        if (verifyOTP === '') {
            alert("Please, enter OTP ");
        }
        else {
            fetch('http://localhost:8000/otp-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ verifyOTP }),
            })
                .then(response => response.json())

                // console the json message of response from backend route
                .then((data) => {
                    setVerifyOTP('');
                    alert(data.message);
                    console.log(data.message);
                })
                .catch(error => console.error(error));
        }
    }



    return (
        <div className="otp-container">
            <h2>OTP Verification</h2>
            <form action="" method="post"  >
                <div className="form-group">
                    <label htmlFor="password">OTP</label>
                    <input type="text" value={verifyOTP} onChange={(e) => setVerifyOTP(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleOTPVerification}>Verify</button>
                </div>
            </form>
        </div>
    )
}

export default OTPverification
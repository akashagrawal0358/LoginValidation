import React, { useState } from 'react';
import '../styles/Registration.css'

const RegistrationPage = () => {

  const[name , setName] = useState('');
  const[email , setEmail] = useState('');

  

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form action="" method="post" >
        <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value) }  />
        </div>
        <div className="form-group">
            <label htmlFor="username">E-Mail</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value) }  />
        </div>
        <div className="form-group">
            <label htmlFor="password">OTP Verification</label>
            <input type="text"/>
        </div>
        <div className="form-group">
            <button type="submit">Registered</button>
        </div>
    </form>
</div>
  )
}

export default RegistrationPage
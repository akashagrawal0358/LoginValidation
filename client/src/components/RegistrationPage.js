import React, { useState } from 'react';
//import NavLink from 'react-router-dom';
import '../styles/Registration.css'

//  useHistory() replaced by useNavigate() that helps in navigating on different pages
import { useNavigate} from 'react-router-dom';

const RegistrationPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
     
    // create an obj
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if (!name || !email) {
            alert("Please enter required fields...")
        }
        else {
            await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data.message);
                    setName('');
                    setEmail('');

                    //  After Successfull Otp gneration, navigates on OTPverification route page 
                    navigate('/OTPverification');
                })
                .catch(error => console.error(error))
        };

    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="" method="post"  >
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">E-Mail</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleSubmit}>
                        Registered

                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage
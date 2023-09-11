
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
// import {toast } from 'react-toastify';
import toast from 'react-hot-toast';
import "../Styles/AuthStyle.css";
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault()
        //     console.log(name,email,password,address,phone);
        //     toast.success('Register Sucessfuly');
        try {
            const res = await axios.post(`/api/v1/auth/login`,
                {
                    email,
                    password,
                });

            if (res && res.data.succes) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,

                });
                localStorage.setItem('auth', JSON.strinfify(res.data));
                navigate(location.state || '/');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong ');

        }
    };


    return (
        <Layout title="Register- Ecommerce App">
            <div className='form-container'>
                {/* <h1> Register Page</h1> */}
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>LOGIN FORM</h4>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Name</label>  */}
                        {/* <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                 id="exampleInputEmail1"
                placeholder="Enter Your Name"
                required
                autoFocus
                /> */}
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Email</label> */}
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"

                            placeholder=" Enter Your Email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <div className='mb-3'>

                        <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>Forgot Password</button>
                    </div>


                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login
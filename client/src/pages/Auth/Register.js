import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {toast } from 'react-toastify';
import toast from 'react-hot-toast';
import "../Styles/AuthStyle.css";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //     console.log(name,email,password,address,phone);
        //     toast.success('Register Sucessfuly');
        try {
            const res = await axios.post(`/api/v1/auth/register`,
                {
                    name,
                    email,
                    password,
                    phone,
                    address,
                    answer,

                });

            if (res && res.data.succes) {
                toast.success(res.data.message)
                navigate('/login');
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
                    <h4 className='title'>REGISTER FORM</h4>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Name</label>  */}
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Name"
                            required
                            autoFocus
                        />
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
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Phone</label> */}
                        <input type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control" id="exampleInputEmail1"
                            placeholder="Enter Your Phone"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Address</label> */}
                        <input type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Address</label> */}
                        <input type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder=" What is  Your Answer"
                            required
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
        </Layout >
    )
};
export default Register;
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate()
    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveAllUser(data.name, data.email, data.role, data.imageURL)
                        console.log(data.name, data.email, data.role, data.imageURL);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveAllUser = (name, email, role, imageURL) => {
        const user = { name, email, role, imageURL };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
            })
    }

    return (
        <div className="">
            <div className='mt-14 flex justify-center items-center '>
                <div className='w-96 p-8 border-r-4 border-orange-500 shadow-lg rounded-lg' >
                    <h2 > Create an Acoount</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email", {
                                required: "Email Address is required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "Password id required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Image</span></label>
                            <input type="imageURL" {...register("imageURL")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Select User Type</span></label>
                            <select name='role' type='text' {...register("role", { required: true })} className="input input-bordered w-full max-w-xs" >
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                        </div>

                        <input value="Sign Up" type="submit" className='btn btn-sm gradient-color w-full mt-4' />
                        {signUpError && <p className='text-red-700'>{signUpError}</p>}
                    </form>
                    <p className='mt-2'>Already have an account?<Link className='text-orange-500' to="/login"> Login</Link></p>

                </div>
            </div>
        </div>

    );
};

export default SignUp;


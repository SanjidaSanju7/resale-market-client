import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [signUpError, setSignUPError] = useState('')

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
                        navigate('/')
                        console.log(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    return (
        <div className="">
            <div className='mt-14 flex justify-center items-center '>
                <div className='w-96 p-8' >
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
                            <label className="label"><span className="label-text">Select an Option</span></label>
                            <select type='text' {...register("category", { required: true })} className="input input-bordered w-full max-w-xs" >
                                <option value="">Select...</option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                        </div>

                        <input value="Sign Up" type="submit" className='btn btn-outline w-full mt-4' />
                        {signUpError && <p className='text-red-700'>{signUpError}</p>}
                    </form>
                    <p>Already have an account?<Link className='text-blue-500' to="/login"> Login</Link></p>

                </div>
            </div>
        </div>

    );
};

export default SignUp;


import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className="bg-white rounded shadow-2xl p-7 w-full lg:w-1/3 mx-auto text-left mt-8 mb-5">
            <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                Please Register
            </h3>
            <div className='mt-14 flex justify-center items-center '>
                <div className='w-96 p-8' >
                    <h2 >Please Login</h2>
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
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
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
                        </div>

                        <input value="Sign Up" type="submit" className='btn btn-outline w-full mt-4' />
                    </form>
                    <p>Already have an account?<Link className='text-blue-500' to="/login">Create new Account</Link></p>

                </div>
            </div>
        </div>

    );
};

export default SignUp;


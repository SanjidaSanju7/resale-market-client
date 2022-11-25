import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="bg-white rounded shadow-2xl p-7 w-full lg:w-1/3 mx-auto text-left mt-8 mb-5">
            <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                Please Register
            </h3>
            <form >
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                    >
                        Email
                    </label>
                    <input
                        placeholder="Your Email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                    >
                        Password
                    </label>
                    <input
                        placeholder="Your Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                    />
                </div>
                <label
                    htmlFor=""
                    className="inline-block mb-1 font-medium"
                >
                    Choose an option
                </label>
                <div>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Seller</option>
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                    <p className="text-xs text-red-500 sm:text-sm text-center">

                    </p>
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="btn btn-sm btn-outline w-full"
                    >
                        Login
                    </button>
                </div>
                <div className="mt-4 mb-4 sm:mb-4">
                    <p className="text-xs text-center text-gray-600 sm:text-sm font-medium ">
                        Social Login
                    </p>
                    <button

                        type="submit"
                        className="btn btn-sm btn-outline w-full mt-4"
                    >
                        <p className='ml-2'>Log In with Google</p>
                    </button>
                </div>

                <p className="text-xs text-gray-600 sm:text-sm text-center">
                    Already have an account?
                    <Link to='/login' className="text-purple-600"> Sign Up.</Link>
                </p>
            </form>
        </div>

    );
};

export default SignUp;
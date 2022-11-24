import React from 'react';
import image from '../../../assets/images/banner.png';

const Banner = () => {
    return (

        <div className="hero min-h-screen">
            <div>
                <img className='min-h-screen' src={image} alt="banner" />
            </div>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl lg:text-4xl font-bold">SELL YOUR LAPTOP FOR QUICK CASH</h1>
                    <p className="mb-5">SellBroke is offering the best 2nd hand laptop. Are you want to know 2nd hand and used laptop prices in Bangladesh? You land in the right place.</p>
                    <button className="btn btn-outline text-white hover:bg-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
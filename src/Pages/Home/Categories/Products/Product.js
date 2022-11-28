import React from 'react';


const Product = ({ product, setItem }) => {

    const { sellersName, location, image, name, originalPrice, resalePrice, usedYears, time } = product;

    return (
        <div className="max-w-sm p-4 shadow-lg dark:bg-gray-900 dark:text-gray-100 mt-14 mx-auto border-r-4 bg-slate-50 border-orange-500 rounded-lg">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p className="mb-0 capitalize dark:text-gray-100 font-bold">Seller's Name: {sellersName}</p>
                </div>
                <p className='font-bold'>Location: {location}</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>{time}</span>
                    </div>
                </div>
                <div className="space-y-2 text-left">
                    <a rel="noopener noreferrer" href="/" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">
                            Name: {name}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-400 font-bold">
                        Original Price: ${originalPrice}</p>
                    <p className="leading-snug dark:text-gray-400 font-bold">
                        Resale Price: ${resalePrice}</p>
                    <p className='font-bold'>Used Years: {usedYears} </p>
                    <label
                        onClick={() => setItem(product)}
                        htmlFor="booking-modal" className="btn btn-sm w-full gradient-color">Book Now
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Product;
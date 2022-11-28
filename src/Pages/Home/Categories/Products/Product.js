import React from 'react';


const Product = ({ product, setItem }) => {

    const { sellersName, location, image, name, originalPrice, resalePrice, usedYears, time } = product;

    return (
        <div className="max-w-sm p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mt-14 mx-auto">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="/" className="mb-0 capitalize dark:text-gray-100">Seller's Name: {sellersName}</a>
                </div>
                <a rel="noopener noreferrer" href="/">Location: {location}</a>
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
                    <p className="leading-snug dark:text-gray-400">
                        Original Price: ${originalPrice}</p>
                    <p className="leading-snug dark:text-gray-400">
                        Resale Price: ${resalePrice}</p>
                    <p>Used Years: {usedYears} years</p>
                    <label
                        onClick={() => setItem(product)}
                        htmlFor="booking-modal" className="btn btn-sm w-full btn-outline">Book Now
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Product;
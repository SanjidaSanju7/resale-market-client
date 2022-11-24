import React from 'react';

const Category = ({ category }) => {

    const { categoryName } = category;
    return (
        <div className="card bg-stone-500 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
            </div>
        </div>
    );
};

export default Category;
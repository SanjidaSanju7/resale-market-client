import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { _id, categoryName } = category;


    return (
        <Link to={`/categories/${_id}`}>
            <div className="mx-auto card border-r-8 w-2/4 shadow-lg border-orange-500 bg-slate-200 mt-10 ">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categoryName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;
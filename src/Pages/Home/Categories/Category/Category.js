import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { _id, categoryName } = category;


    return (
        <Link to={`/categories/${_id}`}>
            <div className="card  bg-blue-400  glass">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categoryName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;
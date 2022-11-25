
import React, { useEffect, useState } from 'react';
import Category from './Category/Category';


const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-14 '>
            <h2 className='text-2xl font-medium'>Laptop Brands For You</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }
            </div>
        </div>
    );
};

export default Categories;
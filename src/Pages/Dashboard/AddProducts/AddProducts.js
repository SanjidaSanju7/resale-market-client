import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext)

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-nu.vercel.app/productCategory');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        email: data.email,
                        name: data.name,
                        categoryName: data.category,
                        resalePrice: data.price,
                        usedYears: data.yearPurchase,
                        location: data.location,
                        condition: data.condition,
                        phone: data.condition,
                        time: data.time,
                        description: data.description,
                        image: imgData.data.url
                    }
                    console.log(product);

                    // save product information to the database
                    fetch('https://resale-market-server-side-nu.vercel.app/myproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success("Product added successfully");
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="">
            <h2 className='text-3xl font-bold mt-5' > Add a Product</h2>
            <div className='mt-14 flex justify-center items-center '>
                <div className='w-1/2 p-8 border shadow-lg border-r-4 border-orange-500 rounded-lg' >
                    <form onSubmit={handleSubmit(handleAddProduct)} >
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs"
                                value={user?.email} />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Price</span></label>
                            <input type="text" {...register("price")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Condition Type</span></label>
                            <input type="text" {...register("condition")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Phone Number</span></label>
                            <input type="text" {...register("phone")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Description</span></label>
                            <input type="text" {...register("description")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Year of Purchase</span></label>
                            <input type="text" {...register("yearPurchase")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Categories</span></label>
                            <select
                                {...register('category')}
                                className="select input-bordered w-full max-w-xs">
                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category.categoryName}
                                    >{category.categoryName}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Time When Posted </span></label>
                            <input value={new Date()} type="text" {...register("time")} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Upload Image</span></label>
                            <input type="file" {...register("image")} className="input input-bordered w-full max-w-xs" />
                        </div>


                        <input value="Add Product" type="submit" className='btn gradient-color w-full mt-4' />

                    </form>

                </div>
            </div>
        </div>

    );
};

export default AddProducts;
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ActionModal from '../../Shared/ActionModal/ActionModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState(null)

    const closeModal = () => {
        setDeleteProduct(null);
    }


    const url = `https://resale-market-server-side-nu.vercel.app/myproducts?email=${user?.email}`;

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = product => {
        fetch(`https://resale-market-server-side-nu.vercel.app/myproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${product.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="text-3xl font-bold mt-5">My Products</h3>
            <div className="overflow-x-auto mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Available/Unsold</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><img className='avatar w-24 rounded' src={product.image} alt="" /></td>
                                <td>{product.name}</td>
                                <td><button className='btn btn-xs gradient-color'>Advertise</button></td>
                                <td><label onClick={() => setDeleteProduct(product)} htmlFor="action-modal" className="btn btn-xs bg-red-500">Delete</label></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deleteProduct && <ActionModal
                    title={`Are you sure you want to delete?`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deleteProduct}
                    closeModal={closeModal}
                >
                </ActionModal>
            }
        </div>
    );
};

export default MyProducts;
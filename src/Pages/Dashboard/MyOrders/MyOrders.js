import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://resale-market-server-side-nu.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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

    return (
        <div>
            <h3 className="text-3xl font-bold mt-5">My Orders</h3>
            <div className="overflow-x-auto mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><img className='avatar w-24 rounded' src={booking.image} alt="" /></td>
                                <td>{booking.itemName}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-sm gradient-color'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500 font-bold'>Paid</span>
                                    }
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
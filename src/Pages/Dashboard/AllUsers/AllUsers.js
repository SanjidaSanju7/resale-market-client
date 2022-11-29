import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-market-server-side-nu.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeVerified = id => {
        fetch(`https://resale-market-server-side-nu.vercel.app/users/verified/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User Varified Successfully')
                }
            })
    }


    const handleDelete = user => {
        console.log(user);
        const proceed = window.confirm("Are you sure, you want to delete this user?");

        if (proceed) {
            fetch(`https://resale-market-server-side-nu.vercel.app/users/${user}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully")
                    }
                })
        }
    }





    return (
        <div>
            <h2 className="text-3xl font-bold mt-5">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full mt-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user.imageURL} alt="" />
                                    </div>
                                </div></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        !user.verify && <button onClick={() => handleMakeVerified(user._id)} className='btn btn-xs'>Verify</button>
                                    }
                                </td>

                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs bg-red-500'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};


export default AllUsers;
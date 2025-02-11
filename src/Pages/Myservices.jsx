import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Myserviceextra from "../components/Myserviceextra";
import useAxiosSecure from "../Hook/UseAxiosSecure";


const Myservices = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetchAllService()
    }, [])

    const fetchAllService = async () => {
        const { data } = await axiosSecure.get(`/allService/${user?.email}`)
        setServices(data)
    }

    const handleDelete = async _id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/allService/${_id}`)
            // console.log(data)
            fetchAllService()
            toast.success('Service Delete Successfully!!')
        }
        catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    }

    const modernDelete = (id) => {
        toast(
            (t) => (
                <div className='flex gap-3 items-center'>
                    <div><p>Are You <b>Sure!</b></p></div>
                    <div className='space-x-2'>
                        <button className='bg-red-400 text-white px-3 py-1 rounded-md' onClick={() => {
                            handleDelete(id)
                            toast.dismiss(t.id)
                        }}>Yes</button>
                        <button className='bg-green-400 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>
                </div>
            ));
    }


    return (
        <div className="overflow-x-auto mb-10 min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>MY-SERVICES</title>
            </Helmet>
            <h3 className="text-blue-700 text-3xl font-bold text-center">My Services</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-gray-500">Email</th>
                        <th className="text-gray-500">Service Title</th>
                        <th className="text-gray-500">Price</th>
                        <th className="text-gray-500">Description</th>
                        <th className="text-gray-500">Update</th>
                        <th className="text-gray-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <Myserviceextra key={service._id}
                            service={service} modernDelete={modernDelete}></Myserviceextra>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myservices;
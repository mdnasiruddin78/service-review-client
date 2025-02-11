import { Helmet } from "react-helmet-async";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Addservice = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const [categorys, setCategorys] = useState()
    console.log(categorys)
    const handleAddService = async e => {
        e.preventDefault()
        const from = e.target;
        const image = from.image.value;
        const title = from.title.value;
        const company = from.company.value;
        const website = from.website.value;
        const price = from.price.value;
        const category = categorys;
        const date = startDate;
        const email = from.email.value;
        const description = from.description.value;
        const addService = { image, title, company, website, price, category, date, email, description }
        // console.log(addService)

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addService`, addService)
            // console.log(data)
            toast.success('Data Added Successfully!!')
            navigate('/service')
        } catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    }

    return (
        <div className='lg:w-3/4 mx-auto mb-10'>
            <Helmet>
                <title>ADD-SERVICE</title>
            </Helmet>
            <div className="text-center mb-3">
                <h1 className="text-2xl font-bold text-blue-700">Add Service</h1>
            </div>
            <div className="card bg-white w-full rounded-xl border-2 border-black">
                <form onSubmit={handleAddService} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <input type="url" name='image' placeholder="Service Image link" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Service Title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Website</span>
                            </label>
                            <input type="url" name='website' placeholder="Website link" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-4 rounded-lg'
                                onChange={e => setCategorys(e.target.value)}
                                value={categorys}
                            >
                                <option value=''>Select a Category</option>
                                <option value='Web-Development'>Web-Development</option>
                                <option value='Graphics-Design'>Graphics-Design</option>
                                <option value='Digital-Marketing'>Digital-Marketing</option>
                                <option value='Game-Development'>Game-Development</option>
                                <option value='Data-Science'>Data-Science</option>
                                <option value='Video-Editing'>Video-Editing</option>
                                <option value='App-Development'>App-Development</option>
                                <option value='Software-Development'>Software-Development</option>
                                <option value='Email-Marketing'>Email-Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Added date</span>
                            </label>
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">userEmail</span>
                            </label>
                            <input type="email"
                                defaultValue={user?.email}
                                readOnly
                                name='email' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='description' placeholder="Description" required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-full bg-gray-800 text-white">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addservice;
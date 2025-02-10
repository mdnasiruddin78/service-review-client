import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";


const Service = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const fetchAllService = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService?filter=${filter}&search=${search}`)
            setServices(data)
        }
        fetchAllService()
    }, [filter, search])

    return (
        <div className="mb-10 min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>ALL-SERVICE</title>
            </Helmet>
            <h3 className="text-white text-3xl font-bold text-center">All Services</h3>
            <div className="mb-5 lg:flex md:flex lg:justify-between md:justify-between space-y-3">
                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        placeholder='Enter Service Title'
                        aria-label='Enter Service Title'
                    />
                    <button className='px-11 md:px-4 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>
                <div>
                    <select
                        name='category'
                        id='category'
                        className='border p-4 rounded-lg'
                        onChange={e => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value=''>Filter By Category</option>
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Service;
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet-async";


const Service = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState([])

    useEffect(() => {
        const fetchAllService = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allService?filter=${filter}&search=${search}`)
            setSort(data)
            setServices(data)
        }
        fetchAllService()
    }, [filter, search])

    const handleSort = () => {
        const sortBy = [...services].sort((a, b) => b.price - a.price);
        setSort(sortBy);
    }


    return (
        <div className="mb-10 min-h-[calc(100vh-306px)]">
            <Helmet>
                <title>ALL-SERVICE</title>
            </Helmet>
            <h3 className="text-blue-700 text-3xl font-bold text-center">All Services</h3>
            <div className="mb-5 lg:flex md:flex items-center lg:justify-between md:justify-between space-y-3">
                <div className="space-x-5">
                    <input
                        className='input input-bordered max-w-xs text-gray-700 placeholder-gray-500 bg-white border-2 border-black'
                        type='text'
                        name='search'
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        placeholder='Search Service Title'
                    />
                    <button onClick={handleSort} className="btn rounded-md bg-white text-black border-2 border-black">Sort By Price</button>
                </div>
                <div>
                    <select
                        name='category'
                        id='category'
                        className='select select-bordered border-2 border-black'
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
                    sort.map(service => <Card key={service._id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Service;
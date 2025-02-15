import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
import { FaRegRegistered } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { MdLogout } from "react-icons/md";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="flex justify-between items-center backdrop-blur bg-white/10 py-2 lg:px-14">
            <div className="flex space-x-3 items-center">
                <div className="hidden lg:flex">
                    <h3 className="text-blue-700 text-xl font-bold">WORK-<span className="text-[#12d32ce5]">SERVICE</span></h3>
                </div>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-white' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-black bg-white font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li>
                            {
                                user && <NavLink to="/addservice">Add Service</NavLink>
                            }
                        </li>
                        <li>
                            {
                                user && <NavLink to="/myreview">My Reviews</NavLink>
                            }
                        </li>
                        <li>
                            {
                                user && <NavLink to="/myservice">My Services</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="lg:flex md:flex hidden space-x-4 text-white font-bold">
                    <NavLink to="/" className="text-blue-700">Home</NavLink>
                    <NavLink to="/service" className="text-blue-700">Services</NavLink>
                    {
                        user && <NavLink to="/addservice" className="text-blue-700">Add Service</NavLink>
                    }

                    {
                        user && <NavLink to="/myreview" className="text-blue-700">My Reviews</NavLink>
                    }
                    {
                        user && <NavLink to="/myservice" className="text-blue-700">My Services</NavLink>
                    }
                </div>
            </div>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                    {
                        user && <div className='tooltip tooltip-left' data-tip={`${user?.email}`}><img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" /></div>
                    }
                </div>
                {
                    user && user?.email ? <button onClick={logoutUser} className="btn bg-white text-black border-2 border-black">Logout<MdLogout className="text-xl"
                    /></button> : <div className="space-x-2">
                        <Link to="/login" className="btn bg-white text-black border-2 border-black">Login <TbLogin2 className="text-xl" /></Link>
                        <Link to="/register" className="btn bg-white text-black border-2 border-black">Register <FaRegRegistered className="text-xl" /></Link>
                    </div>
                }
                <button onClick={() => darkModeHandler()}>
                    {

                        dark && <IoSunny className="text-4xl text-blue-700" />
                    }
                    {
                        !dark && <IoMoon className="text-4xl text-blue-700" />
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;
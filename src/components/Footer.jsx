import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/logoimg.webp';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-[#222222] text-white p-5 text-center">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">WORK-SERVICE</h6>
                <Link to="/"><a className="link link-hover">Home</a></Link>
                <Link to="/service"><a className="link link-hover">All Services</a></Link>
                <Link to="/addservice"><a className="link link-hover">Add Service</a></Link>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title text-xl">DESCRIPTION</h6>
                <p>Work Services provides a secure online platform for<br /> the access of files and forms between a company often utilizing digital tools<br /> and techniques to support decision-making and knowledge sharing within an<br /> organization or for clients. </p>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex justify-center space-x-3'>
                    <div>
                        <img className='w-28 rounded-xl' src={logo} alt="" />
                        <p className=''>www.WORK.com</p>
                    </div>
                    <div className='space-y-3 text-4xl'>
                        <FaSquareFacebook className='text-blue-500' />
                        <FaSquareXTwitter />
                        <SiInstagram className='text-red-500' />
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
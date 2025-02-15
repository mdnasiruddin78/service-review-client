import { FaInternetExplorer, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import CountUp from 'react-countup';
import React from "react";


const Contract = () => {

    return (
        <div>
            <h3 className="text-blue-700 text-3xl text-center font-bold mb-5">Contract Us</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                        <FaInternetExplorer className="text-blue-700 text-xl" />
                        <h3 className="text-blue-700 text-xl font-bold">Company Name: WORK-SERVICE</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneVolume className="text-blue-700 text-xl" />
                        <p className="text-blue-700 text-xl font-bold">Mobile: +0018439875323</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiOutlineMail className="text-blue-700 text-xl" />
                        <p className="text-blue-700 text-xl font-bold">Email: workservice12@gmail.com</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="space-y-3">
                        <h3 className="text-blue-700 text-xl font-bold">Our-Company: Arwaded has been in 2022-2023 year best online
                            service company in social online world</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationDot className="text-blue-700 text-xl" />
                        <p className="text-blue-700 text-xl font-bold">
                            Company Office: New-Market,road 12/14,Chittagong,Bangladesh!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
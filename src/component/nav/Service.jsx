import React from "react";
import vector from '../../assets/images/Vector.png';
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
    const icon1 = (
        <RiMicroscopeLine size={35} className=" text-backgroundColor" />
    );
    const icon2 = (
        <MdHealthAndSafety size={35} className=" text-backgroundColor" />
    );
    const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

    return (
        <div className="flexy flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="bg-emerald-100">
                <div className="serve1">
                    <h1 className="font-bold text-center lg:text-start">
                        Our Services
                    </h1>
               </div>
                <div className="serve2">
                    <div className="serve-main items-center">
                        <img src={vector} alt="vector image" className="img11" />
                        <p className="test1">Educational Loan</p>
                        <h1 className="text2">Educational Loan provides student with flexibility in how they use the funds</h1>
                        <button className="btn1 px-4 py-2 rounded-md"> 
                            Apply now
                        </button>
                    </div>
                    <div className="serve-main items-center">
                        <img src={vector} alt="vector image" className="img11"/>
                        <p className="test1">Educational Loan</p>
                        <h1 className="text2">Educational Loan provides student with flexibility in how they use the funds</h1>
                        <button className="btn1 px-4 py-2 rounded-md"> 
                            Apply now
                        </button>
                    </div>
                    <div className="serve-main items-center">
                        <img src={vector} alt="vector image" className="img11"/>
                        <p className="test1">Educational Loan</p>
                        <h1 className="text2">Educational Loan provides student with flexibility in how they use the funds</h1>
                        <button className="btn1 px-4 py-2 rounded-md"> 
                            Apply now
                        </button>
                    </div>
                </div>
                <button className="button2">
                        View more
                </button>
            </div>
        </div>
    );
};

export default Services;
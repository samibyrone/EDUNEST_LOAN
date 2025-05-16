import React from "react";
import Button from "../layout/Button.jsx";
import loan from "../../assets/images/illustartion.png";

const Home = () => {
    return (
        <div className=" ml-40 px-5 bg-no-repeat bg-cover opacity-90">
            <div className="flex text-center gap-12 mt-10">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="home text-5xl font-bold leading-tight">
                       Quick and Easy Loans for Your Financial Needs.
                    </h1>
                    <p className="homeP text-2xl font-semibold">
                        Our loan services offer a hassle-free and streamlined borrowing experience
                        for students. We understand that financial needs can arise unexpectedly, and
                        our goal is to provide you providing you with the funds you need in a timely
                        manner to meet your financial requirements.
                    </p>
                    <button className="button11">
                        Get Started
                    </button>
                </div> 
                
                <div className="home-img mt-20">
                    <img src={loan} alt="loan illustration" />
                </div>

            </div>
        </div>
    );
};

export default Home;
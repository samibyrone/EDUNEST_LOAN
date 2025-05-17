import React from "react";
import about from "../../assets/images/Table.png";

const About = () => {
    return (
        <div className=" flex6">
            <div className="about">
                <p className="aboutP">About us</p>
                <div className="about1">
                    <img src={about} alt="about design" className="aboutDesign"/>
                    <h1 className="aboutH1">
                        Edunest. Your trusted financial partner for loans. 
                        Quick approvals, competitive rates, and personalized 
                        solutions to meet your unique needs. Empowering you to 
                        achieve your financial goals. Apply online today!
                    </h1>
                </div>
            </div>
            <div className="about2">
                <div className="first">
                    <p className="name">Your Name</p>
                    <input type="text" placeholder="Full name"  className="holder"/>
                </div>
                <div className="first">
                    <p className="name">Phone Number</p>
                    <input type="text" placeholder="Number" className="holder" />
                </div>
                <div className="first">
                    <p className="name">Email Address</p>
                    <input type="text" placeholder="Email" className="holder" />
                </div>
                 <button className="button22">
                    SEND
                </button>
            </div>
        </div>
    );
};

export default About;
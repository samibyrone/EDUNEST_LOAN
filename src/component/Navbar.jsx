import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../component/layout/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    const openForm = () => {
        setShowForm(true);
        setMenu(false);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className=" container justify-between w-full z-50 text-white">
            <div>
                <div className=" navbar flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className=" flex flex-row items-center cursor-pointer">
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <h1 className=" text-3xl font-semibold">EDUNE$T</h1>
                        </Link>
                    </div>

                    <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Home
                        </Link>
                        <Link to="service" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Services
                        </Link>
                        <Link to="blog" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Blog
                        </Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            About Us
                        </Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                            Contact Us
                        </Link>
                    </nav>

                    <div className=" hidden lg:flex">
                        <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
                            Login
                        </button>
                    </div>

                    {showForm && <Contact closeForm={closeForm} />}

                    <div className=" lg:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={28} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu size={28} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div
                    className={`${
                        menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        About Us
                    </Link>
                    <Link to="services" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link to="doctors" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Appointments
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer">
                        Contact Us
                    </Link>
                    <Link to="blog" spy={true} smooth={true} duration={500} className=" hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
                        Blog
                    </Link>

                    <div className=" lg:hidden">
                        <Button className="bg-green text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


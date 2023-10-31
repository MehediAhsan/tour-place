import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="px-4 divide-y-2 divide-rose-200  dark:text-gray-200 ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center rounded-full">
                            <img className='w-12' src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold text-rose-500 font-Berkshire">Tour Place</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-200">Services</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/">Wedding</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Sports</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Event</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Nature</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-200">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-200">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Public API</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Documentation</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-200">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <Link rel="noopener noreferrer" to="/" title="Facebook" className="flex items-center p-1 text-blue-500 text-xl">
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link rel="noopener noreferrer" to="/" title="Twitter" className="flex items-center p-1 text-blue-500 text-xl">
                                <FaTwitter></FaTwitter>
                            </Link>
                            <Link rel="noopener noreferrer" to="/" title="Instagram" className="flex items-center p-1 text-blue-500 text-xl">
                                <FaInstagram></FaInstagram>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-300">© 2023 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
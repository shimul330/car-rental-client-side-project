import React from 'react';
import logoImg from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <div>
                        <img className='w-20 h-16' src={logoImg} alt="" />
                    </div>
                    <p>
                        Car Rental
                        <br />
                        Providing reliable Car Rental since 2000
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Car Rental</a>
                    <a className="link link-hover">Diffarent Car Rental</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <p>Copyright © 2025 - All right reserved by Car Rental Ltd</p>
                    <div className='flex justify-center items-center gap-6 mt-5'>
                        <FaFacebook size={20} />
                        <FaTwitter size={20} />
                        <FaYoutube size={20} />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
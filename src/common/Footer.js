import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactSlick from '../components/ReactSlick/ReactSlick';
// import ImageSlider from '../../Componenets/ImageSlider/ImageSlider';
const Footer = () => {
    return (
        <div className='pt-8 fontsimplement'>
            <div className="auto-scroll">
               <ReactSlick></ReactSlick>
            </div>
            <footer className='bg-slate-100 text-left'>
                <div className='container mx-auto sm: px-8 py-16'>
                <div className='grid lg:grid-cols-2 '>
                <div className='grid sm:grid-cols-3'>
                    <div className='col-span-2'>
                        <div>
                            <img className='w-2/3' src="https://i.ibb.co/1sSL7XT/mainLogo.png" alt="" />
                        </div>
                        <p className='my-4 w-80'>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                        <p><span className='font-extrabold'>Phone:</span> +92300-400-2333</p>
                        <p className='my-4'><span className='font-extrabold'>Email:</span> restaurant@gmail.com</p>
                        <a className='hover:text-orange-400' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a  className='mx-3 hover:text-orange-400' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className='hover:text-orange-400' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='mx-3 hover:text-orange-400' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a className='hover:text-orange-400' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div>
                        <h1 className='font-extrabold text-xl'>Our Services</h1>
                        <p className='mt-5'><a className='font-extrabold hover:text-orange-400' href="/home">Home</a></p>
                        <p className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/food">Food</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/resturant">Resturant</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/cart">Cart</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/blog">Blog</a></p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-5 gap-10'>
                <div className='text-left col-span-3'>
                        <h1 className='font-extrabold text-xl'>Latest News</h1>
                        <div className='mt-5'>
                            <div className='grid grid-cols-3 items-center'>
                                <div className='w-4/5 p-2'>
                                    <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-6-150x150.jpg" alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <a className='font-extrabold hover:text-orange-400' href="https://www.foodpanda.com.bd/">Barbecue Burgers With Sweet Chili Mayo</a>
                                    <p>March 19, 2021</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 mt-3 items-center'>
                                <div className='w-4/5 p-2'>
                                    <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-5-150x150.jpg" alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <a className='font-extrabold hover:text-orange-400' href="https://www.foodpanda.com.bd/">Barbecue Burgers With Sweet Chili Mayo</a>
                                    <p>March 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='col-span-2'>
                        <h1 className='font-extrabold text-xl'>Useful Links</h1>
                        <p className='mt-5'><a className='font-extrabold hover:text-orange-400' href="/home">Home</a></p>
                        <p className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/food">Food</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/resturant">Resturant</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/cart">Cart</a></p>
                        <p  className='mt-3'><a className='font-extrabold hover:text-orange-400' href="/blog">Blog</a></p>
                    </div>
                </div>
                </div>
                <h1 className='text-center mt-16'>Copyright 2022 © Hungry Kitchen Created By <a className='font-bold' href="https://docs.google.com/document/d/1o0VtDfH_Hixn8dfcQBbI0sVMUKvVRMBzYnzISIZLAGg/edit">AltDevs</a> <span ></span> Team All Rights Reserved</h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

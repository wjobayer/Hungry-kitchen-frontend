import { faFacebook, faGoogle, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import ImageSlider from '../../Componenets/ImageSlider/ImageSlider';

const Footer = () => {
    return (
        <div className='pt-8'>
            <div className="auto-scroll">
               
            </div>
            <footer className='bg-slate-200 text-left'>
                <div className='container mx-auto px-20'>
                <div className='grid grid-cols-2'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
                        <div>
                            <img className='w-2/3' src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/sticky.svg" alt="" />
                        </div>
                        <p className='my-4 w-80'>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                        <p><span className='font-extrabold'>Phone:</span> +92300-400-2333</p>
                        <p className='my-4'><span className='font-extrabold'>Email:</span> restaurant@gmail.com</p>
                        <a href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className='mx-3' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className='mx-3' href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="https://youtu.be/62b9HXn4VnI"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div>
                        <h1 className='font-extrabold text-xl'>Our Services</h1>
                        <p className='mt-5'><a className='font-extrabold' href="/home">Home</a></p>
                        <p className='mt-3'><a className='font-extrabold' href="/food">Food</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/resturant">Resturant</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/cart">Cart</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/blog">Blog</a></p>
                    </div>
                </div>
                <div className='grid grid-cols-5'>
                <div className='text-left col-span-3'>
                        <h1 className='font-extrabold text-xl'>Latest News</h1>
                        <div className='mt-5'>
                            <div className='grid grid-cols-3 items-center'>
                                <div className='w-4/5 p-2'>
                                    <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-6-150x150.jpg" alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <a className='font-extrabold' href="https://www.foodpanda.com.bd/">Barbecue Burgers With Sweet Chili Mayo</a>
                                    <p>March 19, 2021</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 mt-3 items-center'>
                                <div className='w-4/5 p-2'>
                                    <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/post-5-150x150.jpg" alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <a className='font-extrabold' href="https://www.foodpanda.com.bd/">Barbecue Burgers With Sweet Chili Mayo</a>
                                    <p>March 19, 2021</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                <div>
                        <h1 className='font-extrabold text-xl'>Useful Links</h1>
                        <p className='mt-5'><a className='font-extrabold' href="/home">Home</a></p>
                        <p className='mt-3'><a className='font-extrabold' href="/food">Food</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/resturant">Resturant</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/cart">Cart</a></p>
                        <p  className='mt-3'><a className='font-extrabold' href="/blog">Blog</a></p>
                    </div>
                </div>
                </div>
                </div>
            </footer>
            
        </div>
    );
};

export default Footer;
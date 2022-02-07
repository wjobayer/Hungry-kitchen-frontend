import React from 'react';
import { Parallax } from 'react-parallax';


const ParallaxSection = () => {
    return (

        <div >

            <Parallax bgImage='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/promo-11.png' strength={400}>
                <div style={{ height: '70vh' }} className='container mx-auto flex items-center'>
                    <div >
                        <p className='text-yellow-300 font-semibold'>TASTY BURGER</p>
                        <h2 className='  text-5xl mt-5 font-semibold'>Explore The Best Food  <br />
                            Places Near You</h2>
                        <div className='mt-5'>
                            <span > <hr style={{ width: '60px', background: 'black', border: 'none', height: '3px', display: 'inline-block' }} /></span>
                            <span className='ml-1 font-bold'>...</span>

                        </div>

                        <h5 className='text-3xl mt-5 font-semibold'>Largest Business Restaurant Food Theme in the World.</h5>
                        <h6 className='text-2xl mt-5'>Make Your Own Educational Institute listing website including <br /> academies schools pre schools certifications and many more...</h6>
                        <button class="rounded-none ... mt-7">Read More</button>
                        <span className='ml-7'><button class="rounded-none ...">Search Now</button></span>
                    </div>

                </div>

            </Parallax >




        </div >
    );
};

export default ParallaxSection;
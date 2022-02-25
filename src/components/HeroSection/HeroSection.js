import React from 'react';

const HeroSection = () => {
    return (
        <div
            style={{ backgroundImage: `url("https://marketplace.foodotawp.com/wp-content/uploads/2021/05/two.png") `, backgroundRepeat: 'cover', height: '100vh', marginTop: "-250px" }}
            className='lg:pb-44 sm:pb-40 '>

            <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-28 pt-44 p-10">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold  text-white sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Order Healthy And <br /> Fresh Food</span>{' '}
                        <span className="block text-yellow-500 xl:inline">Any Time</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        While eating at a restaurant is an enjoyable and convenient occasional treat, most individuals and families prepare their meals at home. <br />  <span className='text-yellow-500 '>To get homemade food join our platform now.</span>
                    </p>

                    <div className="mt-4 sm:mt-4 sm:flex sm:justify-center lg:justify-start">
                        <button className="rounded px-6 bg-yellow-400 hover:bg-white hover:text-black font-bold p-4 mt-7 ">Order Now!!!</button>
                    </div>
                </div>
            </main>

            <div ></div>

            {/* <div className="lg:absolute sm:absolute lg:inset-y-0 lg:right-0 -z-30">
                <img
                    className="object-cover h-50"
                    src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/two.png"
                    alt=""
                />
            </div> */}
        </div>
    );
};

export default HeroSection;
import React from 'react';

const HeroSection = () => {
    return (
        <div className='lg:pb-44 sm:pb-40'>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Order Healthy And <br /> Fresh Food</span>{' '}
                        <span className="block text-yellow-500 xl:inline">Any Time</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <button className="rounded px-6 bg-yellow-400 hover:bg-white hover:text-black font-bold p-4 mt-7 ">Read More</button>
                    </div>
                </div>
            </main>

            <div className="lg:absolute lg:inset-y-0 lg:right-0 -z-30">
                <img
                    className="object-cover h-50"
                    src="https://marketplace.foodotawp.com/wp-content/uploads/2021/05/two.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default HeroSection;
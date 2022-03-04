import React from 'react';
import {BiDollarCircle} from 'react-icons/bi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {FcSalesPerformance} from 'react-icons/fc'
import {VscStarFull} from 'react-icons/vsc'
import PageVisitsCard from '../components/PageVisitsCard';
import TrafficCard from '../components/TrafficCard';
const Rider = () => {
    return (
        <>
            <div className="bg-blue-500 px-3 md:px-8 h-40" />
<div className="px-3 md:px-8">
    <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <div className='divide-y divide-gray-300 border-orange-400 shadow-inner p-8 rounded-lg '>
                <div class="grid grid-cols-3">
                <div>
                <GiTakeMyMoney className='bg-orange-500 text-white  text-4xl col-span-1'/>
                </div>
                <div class="col-span-2">
                <h1 className='text-right'>Net Income</h1>
                <h1 className='text-3xl text-right'>1000$</h1>
                </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-xs text-center'>Five Starred Food Item</h2>
                </div>
            </div>
            <div className='divide-y divide-gray-300 border-orange-400 shadow-inner p-8 rounded-lg '>
                <div class="grid grid-cols-3">
                <div>
                <BiDollarCircle className='bg-purple-500 text-white  text-4xl col-span-1'/>
                </div>
                <div class="col-span-2">
                <h1 className='text-right'>Current Income</h1>
                <h1 className='text-3xl text-right'>600$</h1>
                </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-xs text-center'>Five Starred Food Item</h2>
                </div>
            </div>
            <div className='divide-y divide-gray-300 border-orange-400 shadow-inner p-8 rounded-lg '>
                <div class="grid grid-cols-3">
                <div>
                <FcSalesPerformance className='bg-pink-500 text-white  text-4xl col-span-1'/>
                </div>
                <div class="col-span-2">
                <h1 className='text-right'>Total Sales</h1>
                <h1 className='text-3xl text-right'>254</h1>
                </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-xs text-center'>Five Starred Food Item</h2>
                </div>
            </div>
            <div className='divide-y divide-gray-300 border-orange-400 shadow-inner p-8 rounded-lg '>
                <div class="grid grid-cols-3">
                <div>
                <VscStarFull className='bg-blue-500 text-white  text-4xl col-span-1'/>
                </div>
                <div class="col-span-2">
                <h1 className='text-right'>Five Starred Item</h1>
                <h1 className='text-3xl text-right'>24</h1>
                </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-xs text-center'>Five Starred Food Item</h2>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="px-3 md:px-8 h-auto">
    <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                <PageVisitsCard />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                <TrafficCard />
            </div>
        </div>
    </div>
</div>
        </>
    );
};

export default Rider;
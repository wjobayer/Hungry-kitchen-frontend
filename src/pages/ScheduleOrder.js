import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';
import DatePicker from 'sassy-datepicker';
import Footer from '../common/Footer';
import HeaderBlack from '../common/HeaderBlack';


const ScheduleOrder = () => {
    const [time, setTime] = useState('12:34pm');
    const [date, setDate] = useState(new Date());
    const [dateOf, setDateOf] = useState('');
    const onChange = newDate => {
        setDateOf(`${newDate.toString()}`);
        console.log (`${newDate.toString()}`)
        setDate(newDate);
      };
    return (
        <div>
            <HeaderBlack></HeaderBlack>
            <div>
            <div className='container'>
            <h1 className='text-center text-4xl'>Make Your Schedule Order</h1>
            <div className='grid grid-cols-3 gap-4 items-center my-12'>
            <div>
            <TimeKeeper
                time={time}
                onChange={(newTime) => setTime(newTime.formatted12)}
            />
            
        </div>
        <div>
        <DatePicker onChange={onChange} selected={date} />
        </div>
        <div>
        <h1 className='text-2xl border p-4'>Time : {time}</h1>
        <h1 className='text-2xl border p-4'>Date :{dateOf}</h1>
        </div>
            </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ScheduleOrder;
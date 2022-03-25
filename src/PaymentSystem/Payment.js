import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Footer from '../common/Footer';
import HeaderBlack from '../common/HeaderBlack';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Ke9ZdJO1wHwB6sYi2RliY81wccfMDfQOcVj1cntcHqrkzMn5sikW1b1q8vyNc1ZLMoKR4pCg9CV3bTvcMw6HVPc008udG1NI8')

const Payment = () => {
    // const { Id } = useParams();
    // const [orders, setOrders] = useState({});
    // const orders = useSelector((state) => state.addToCart);
    // useEffect(() => {
    //     fetch(`https://hungry-kitchen-app.herokuapp.com/orders/${Id}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data));
    // }, [Id]);
    return (
        <div>
            <HeaderBlack></HeaderBlack>
            <div className="bg-[url('https://img.freepik.com/free-vector/cerulean-blue-curve-frame-template_53876-99029.jpg?t=st=1648065811~exp=1648066411~hmac=3f3861308d6f24a6cc640bcc207c10d9f6f7e38c99c8b2cbca455556a9958fa3&w=900')] bg-no-repeat bg-cover ">
            <div className=" container py-16">
           {/* <div className='my-16 container bg-white border rounded-xl shadow-xl '> 
           <div className='flex items-center '>
            <img src={orders.resturantImage} alt="ok" width="160" height="160"></img>
            <h2 className="text-2xl"><sapn className="text-blue-800">{orders.resturantName}</sapn> Restaurant</h2>
            </div>
            <div className="w-4/5 mx-auto mb-8">
            <img src={orders.foodImage} alt="ok" width="300" height="300"></img>
            <h2 className="text-2xl mt-8">{orders.foodName} </h2>
            <h2 className="text-2xl">{orders.price} $ x {orders.cartQuantity} = {orders.totalPrice} $</h2>
            </div>
            </div> */}
           <div className='w-2/3 py-8 my-16 container bg-white border rounded-xl shadow-xl col-span-2'> 
           <Elements stripe={stripePromise}>
               <CheckoutForm ></CheckoutForm>
            </Elements>
            </div>
           </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Payment;
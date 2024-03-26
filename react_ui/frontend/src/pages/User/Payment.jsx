import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'

import '../../assets/css/Payment.css'


const Payment = () => {
const [amount,setAmount] = useState(299);

const handleSubmit = (e) => {
    e.preventDefault();
    if(amount === '') {
        alert("Please enter amount!");
    } else {
        var options = {
            key: "rzp_test_v49iPcvulSc5Er",
            key_secret: "XVfWPeADrtRe1Gpfqu6ExKdT",
            amount: amount * 100,
            currency: "INR",
            name: "Net11",
            description: "for mobile recharge",
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Net11",
                email: "net11@gmail.com",
                conatct: "7708507527"
            },
            notes: {
                address: "Net RazorPay office"
            },
            theme: {
                color: "#e50914"
            }
        };
        var pay = new Razorpay(options);
        pay.open();
    }
}

  return (
    <div>
        <Navbar />
        <div className="overall-payment-container">
            <div className="overall-payment-container-1">
                <h1>Pay using any upi</h1>
                <h1>Your financial info is secured</h1>
            </div>
            <div className="overall-payment-container-2">
                <div className="payment-container">
                    <div>
                        <h2>YOUR SELECTED RECHARGE PLAN</h2>
                    </div>

                    <div className='p-container-bottom'>
                        <p style={{fontWeight:'bold'}}>Choosing the best payment gateway</p>
                        <p>Data validity: 28 days</p>
                        <p>Data: 1.5 GB/Day</p>
                        <p>Unlimited Voice/SMS 100 per days</p>
                    </div>

                    <div>
                        <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                    </div>

                    <div>
                        <Link to='/pay'><button>Pay now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
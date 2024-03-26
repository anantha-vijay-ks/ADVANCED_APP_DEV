import React from 'react';
import '../../assets/css/FAQ.css';

const FAQComponent = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-3d-container">
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-question">How do I recharge my mobile?</h3>
            <p className="faq-answer">To recharge your mobile, simply navigate to the recharge section on our website, enter your mobile number, choose a recharge plan, and proceed to payment.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">What payment methods do you accept?</h3>
            <p className="faq-answer">We accept payments via credit/debit cards, net banking, UPI, and mobile wallets like Paytm, Google Pay, and PhonePe.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">How long does it take for the recharge to reflect on my mobile?</h3>
            <p className="faq-answer">Usually, recharges reflect instantly. However, in some cases, it may take up to 15 minutes for the recharge to reflect on your mobile.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Can I cancel a recharge?</h3>
            <p className="faq-answer">Once a recharge is initiated, it cannot be canceled. Please review your recharge details carefully before proceeding with the payment.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Do you offer refunds for failed recharges?</h3>
            <p className="faq-answer">Yes, if your recharge fails due to technical reasons or any other issue, the amount will be refunded to your original payment method within 2-3 business days.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Is it safe to use my credit/debit card on your website?</h3>
            <p className="faq-answer">Absolutely! We use industry-standard encryption protocols to ensure the security of your payment information. Your card details are secure with us.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Do you charge any additional fees for recharges?</h3>
            <p className="faq-answer">No, we do not charge any additional fees for recharges. The amount you see during the checkout process is the final amount you'll pay.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQComponent;

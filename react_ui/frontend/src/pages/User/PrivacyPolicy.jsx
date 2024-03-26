import React from 'react';
import '../../assets/css/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2>Privacy Policy</h2>
      <div className="privacy-policy-box">
        <h3>Data Protection</h3>
        <p>We prioritize the protection of your personal information. Any data collected during your use of our service is securely stored and never shared with third parties without your explicit consent.</p>
      </div>
      <div className="privacy-policy-box">
        <h3>Secure Transactions</h3>
        <p>Your payment details are encrypted and transmitted securely during transactions. We utilize industry-standard security protocols to safeguard your financial information.</p>
      </div>
      <div className="privacy-policy-box">
        <h3>Usage Information</h3>
        <p>We may collect anonymous usage data to improve our services and user experience. This information is aggregated and does not personally identify you.</p>
      </div>
      <div className="privacy-policy-box">
        <h3>Cookie Policy</h3>
        <p>We use cookies to enhance your browsing experience and personalize content. You have the option to manage cookie preferences through your browser settings.</p>
      </div>
      <div className="privacy-policy-box">
        <h3>Communication</h3>
        <p>By using our services, you consent to receiving occasional updates and promotional messages. You can opt-out of these communications at any time through your account settings.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

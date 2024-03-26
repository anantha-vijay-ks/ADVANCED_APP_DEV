import React from 'react';
import '../../assets/css/TermsAndConditions.css'; 

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-box">
        <h2>Terms and Conditions</h2>
        <div className="terms-list">
          <ol>
            <li>By using our service, you agree to our terms and conditions.</li>
            <li>All recharges are subject to availability and our discretion.</li>
            <li>We do not guarantee uninterrupted service and are not liable for any loss due to service disruption.</li>
            <li>All transactions are final; refunds are issued only in exceptional cases.</li>
            <li>We reserve the right to modify or terminate services without prior notice.</li>
            <li>Users are responsible for providing accurate information for recharge transactions.</li>
            <li>Abusive or fraudulent use of our services will result in immediate suspension.</li>
            <li>We may collect and use personal information as outlined in our privacy policy.</li>
            <li>Service availability and pricing may vary based on location and network.</li>
            <li>By using our service, you agree to receive promotional communications from us.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;

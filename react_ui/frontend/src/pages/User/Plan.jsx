import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/css/Plan.css";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Plan = () => {

  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [selectedCard, setSelectedCard] = useState(null);

  const handleInfoClick = (item) => {
    setSelectedCard(item);
    setShowPopup(true);
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const popularRechargePacksData = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹159',validity:'14' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹170', validity:'20' },

  ];
  const herounlimited = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 200 per days',rate:'₹450',validity:'45' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 200 per days',rate:'₹525', validity:'60' },
  ];
  
  return (
    <>
    <Navbar />
<div className="title-card">
      <h1>#HashTag Unlimited Plans</h1>
      <p>Discover the best unlimited plans for your mobile!</p>
    </div>
      <div className="split-page">
        <div className="left-section">
          
        </div>
        <div className="right-section">
          <div id="prp">
            <h1>Short Recharge Plans</h1>
            <div>
      {popularRechargePacksData.map((item, index) => (
        <div key={index} className="Rechargecard">
          <h3>{item.rate}</h3>
          <h5>Data<br/>{item.data}</h5>
          <h6>Validity<br/>{item.validity} Days</h6>
          <div className="split-line"></div>
          <p>{item.description}</p>
          <i className="material-icons" onClick={handlePopupOpen}>info</i>
          <button className="buy-btn" onClick={()=>navigate('/payment')}>Recharge</button>
        </div>
      ))}

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>&times;</span>
          </div>
        </div>
      )}
    </div>
          </div>
          <div id="hu">
            <h1>Long Term Recharge Plans</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="Rechargecard">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons" onClick={handlePopupOpen}>info</i>
          <button className="buy-btn" onClick={()=>navigate('/payment')}>Recharge</button>
              </div>
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Plan;

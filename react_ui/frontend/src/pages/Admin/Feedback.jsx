import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Feedback.css";

const AdminFeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      username: 'Sundar',
      message: 'Great job on the new design!',
    },
    {
      id: 2,
      username: 'Suresh',
      message: 'I love the new feature, but I think it could be improved...',
    },
    {
        id: 3,
        username: 'Kumar',
        message: 'Super easy to use, recharged my phone in seconds!',
      },
      {
        id: 4,
        username: 'Gopal',
        message: 'Impressed with the seamless experience and fast transactions. The website layout is intuitive, making it effortless to navigate through various recharge options.',
      },
      {
        id: 5,
        username: 'Indu',
        message: 'Love the variety of payment options available',
      },
      {
        id: 6,
        username: 'Maanci',
        message: 'User-friendly interface, makes recharging a breeze.',
      },
      {
        id: 7,
        username: 'Mani',
        message: 'I love the new feature, but I think it could be improved...',
      },
      {
        id: 8,
        username: 'Bala',
        message: 'This platform has simplified my recharge process significantly. I appreciate the clear instructions and prompt notifications, ensuring I never miss a recharge deadline.',
      },
      {
        id: 9,
        username: 'Vijay',
        message: 'Excellent customer support, always there to assist.',
      },
  ]);

  useEffect(() => {
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function () {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    };

}, [])

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="title">#HashTag</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <i className='material-icons'>grid_view</i>
              </span>
              <Link to='/admin-dashboard'><span className="title">Dashboard</span></Link>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <i className='material-icons'>account_circle</i>
              </span>
              <Link to='/customer'><span className="title">Customers</span></Link>
            </a>
          </li>

          <li className="hovered">
            <a href="#">
              <span className="icon">
                <i className='material-icons'>feedback</i>
              </span>
              <Link to='/feedback'><span className="title">Feedback</span></Link>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <i className='material-icons'>logout</i>
              </span>
              <Link to='/login'> <span className="title">Sign Out</span></Link>
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="topbar">
          <div className="toggle"></div>
        </div>
        <div className="details">
          <div className="feed">
            <div className="cardHeader">
              <h2>Feedback</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {feedbackList.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.username}</td>
                    <td>{entry.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFeedbackPage;

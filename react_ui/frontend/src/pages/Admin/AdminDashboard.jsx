import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/AdminDashboard.css"


const AdminDashboard = () => {
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
                            <span class="title">#HashTag</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>grid_view</i>
                            </span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>account_circle</i>
                            </span>
                            <Link to='/customer'><span class="title">Customers</span></Link>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>feedback</i>
                            </span>
                            <Link to='/feedback'><span class="title">Feedback</span></Link>
                        </a>
                    </li>


                    
                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>logout</i>
                            </span>
                            <Link to='/login'> <span class="title">Sign Out</span></Link>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                    </div>
                </div>
                <div className="details">
                    
                    <div class="recentOrders">
                        <div class="cardHeader">
                            <h2>Recent Reacharge History</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Customer Name</td>
                                    <td>Price</td>
                                    <td>Package</td>
                                    <td>Network</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Prabu</td>
                                    <td>₹1200</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Mani</td>
                                    <td>₹110</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Bala</td>
                                    <td>₹1200</td>
                                    <td>prepaid</td>
                                    <td>AIRTEL</td>
                                </tr>

                                <tr>
                                    <td>Gopal</td>
                                    <td>₹620</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Kumar</td>
                                    <td>₹1200</td>
                                    <td>postpaid</td>
                                    <td>VI</td>
                                </tr>

                                <tr>
                                    <td>Suresh</td>
                                    <td>₹1200</td>
                                    <td>postpaid</td>
                                    <td>VI</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="recentCustomers">
                        <div class="cardHeader">
                            <h2>Recent Customers</h2>
                        </div>

                        <table>
                            <tr>
                                <td>
                                    <h4>prabhu <br /> <span>JIO</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sai <br /> <span>AIRTEL</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Revi<br /> <span>AIRTEL</span></h4>
                                </td>
                            </tr>

                            <tr>

                            </tr>

                            <tr>
                                <td>
                                    <h4>Sundar<br /> <span>JIO</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Rajesh<br /> <span>VI</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Raj <br /> <span>JIO</span></h4>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
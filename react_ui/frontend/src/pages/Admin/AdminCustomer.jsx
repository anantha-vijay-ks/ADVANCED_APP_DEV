import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/AdminDashboard.css"


const AdminCustomer = () => {
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
                            <Link to='/admin-dashboard'><span class="title">Dashboard</span></Link>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>account_circle</i>
                            </span>
                            <span class="title">Customers</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>feedback</i>
                            </span>
                            <Link to='/feedback'> <span class="title">Feedback</span></Link>
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
                            <h2>Customer List</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Customer Name</td>
                                    <td>Package</td>
                                    <td>Network</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Prabu</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Mani</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Bala</td>
                                    <td>prepaid</td>
                                    <td>AIRTEL</td>
                                </tr>

                                <tr>
                                    <td>Gopal</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Kumar</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Suresh</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>
                                <tr>
                                    <td>Prabu</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>
                                <tr>
                                    <td>Sai</td>
                                    <td>postpaid</td>
                                    <td>AIRTEL</td>
                                </tr>
                                <tr>
                                    <td>Revi</td>
                                    <td>postpaid</td>
                                    <td>AIRTEL</td>
                                </tr>
                                <tr>
                                    <td>Sundar</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>
                                <tr>
                                    <td>Raj</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default AdminCustomer;
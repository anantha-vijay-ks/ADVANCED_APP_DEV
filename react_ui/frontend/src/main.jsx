import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Auth/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Plan from './pages/User/Plan';
import Payment from './pages/User/Payment'; 
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminCustomer from './pages/Admin/AdminCustomer';
import TermsAndConditions from './pages/User/TermsAndConditions';
import FAQ from './pages/User/FAQ';
import PrivacyPolicy from './pages/User/PrivacyPolicy';
import AdminFeedbackPage from './pages/Admin/Feedback';

export default function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/user-plan" element={<Plan />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<PrivacyPolicy />} /> 
                
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/customer" element={<AdminCustomer />} />
                <Route path="/feedback" element={<AdminFeedbackPage />} />

            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp />);

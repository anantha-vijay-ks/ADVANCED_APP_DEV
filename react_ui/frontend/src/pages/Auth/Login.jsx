import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '' || password === '') {
      setError('Please fill all fields');
    } else if (phoneNumber === '000' && password === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="right-side">
        <form>
          <h1>Welcome to HashTag#</h1>
          <div>
            <input type="text" placeholder="+0 xxxxxxxxxx" maxLength={14} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {phoneNumberError && <div className="error">{phoneNumberError}</div>}
          </div>
          <div>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
          <div className='forgot-password'>
            <p>Forgot your password?</p>
          </div>
          <button type='button' onClick={handleLogin}>Login</button>
          <div>
            <h4>New member to #? <span onClick={() => navigate('/register')}>Create account <i className="material-icons">chevron_right</i></span></h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
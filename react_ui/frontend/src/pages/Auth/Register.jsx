import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css';

const Register = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setMobileError('');
    setUsernameError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;
    if (mobileNumber.trim() === '') {
      setMobileError('Please fill in all fields');
      isValid = false;
    }

    if (isValid) {
      console.log('Registration form submitted');
      navigate('/');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <h1>Create your # account</h1>
            <div>
              <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobileNumberChange} />
              {mobileError && <span className="error">{mobileError}</span>}
            </div>
            <div>
              <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
              {usernameError && <span className="error">{usernameError}</span>}
            </div>
            <div>
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
            </div>
            <button type="submit">Register</button>
            <div>
              <h4>Existing user? <span onClick={() => navigate('/login')}>Login here <i className="material-icons">chevron_right</i></span></h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from 'react';
import './Login.scss';
import { useDispatch,useSelector } from 'react-redux'; // Import useDispatch hook
import { signupRequest } from '../../Redux/Action/SignupAction';

export default function Login({ isOpen, toggleLogin }) {
  const [userData, setUserData] = useState('');
  const dispatch = useDispatch(); // Get dispatch function from Redux
  const message = useSelector((state) => state.user.error ? state.user.error.message:null)
 
 // console.log("I am rendering"); // everytime I am typing in input field it is re rendering which is ok

 

  console.log(message)

  const handleChange = (e) => {
    setUserData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Dispatch signupRequest action using dispatch

    dispatch(signupRequest(userData)); // Dispatch the action with userData
    message && toggleLogin();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-container">
          <div className="modal">
            <h2>Login</h2>
            <span className="close" onClick={toggleLogin}>&times;</span>
            <div className="modal-content">
              <div className="modal-left">
                <img src="https://via.placeholder.com/150" alt="Login" />
              </div>
              <hr/>
              <div className="modal-right">
              {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                  <p>Enter your phone or email to continue.</p>
                  <p>
                    <label>
                      Phone or Email:
                      <input type="text" name="phoneOrEmail" value={userData} onChange={handleChange} required />
                    </label>
                  </p>
                  <div className="btn-group">
                    <button type="button" onClick={toggleLogin}>Cancel</button>
                    <button type="submit">Confirm</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

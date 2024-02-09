import React, { useState } from 'react';
import './Login.scss';

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal-container">
        
          <div className="modal">
          <h2>Login</h2>
            
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-content">
              <div className="modal-left">
                <img src="https://via.placeholder.com/150" alt="Login" />
                
              </div>
              <hr/>
              <div className="modal-right">
                <form onSubmit={handleSubmit}>
                <p>Enter your phone or email to continue.</p>
                  <p>
                    <label>
                      Phone or Email:
                      <input type="text" name="phoneOrEmail" required />
                    </label>
                  </p>
                  <div className="btn-group">
                    <button type="button" onClick={closeModal}>Cancel</button>
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

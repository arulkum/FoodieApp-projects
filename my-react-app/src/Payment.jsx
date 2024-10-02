// import React from 'react';

// const Payment = () => {
//   return (
//     <div className="container mt-5">
//       <h1>  {'\u2705'} Your Payment is Success</h1>
//       <p>This is the Foodie App. We deliver the best food from the best restaurants around the world.</p>
//     </div>
//   );
// };

// export default Payment;
import React, { useState } from 'react';
import './Dialog.css'; 
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Payment() {
  const [isOpen, setIsOpen] = useState(false);
  let navigateToscreen =useNavigate()
  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    navigateToscreen('/home')
  };

  return (
    <div style={{textAlign:"center"}}>
        <h1>Complete The Payment</h1>
      <button className="btn btn-success" onClick={handleOpenDialog}>Payment</button>
       
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Payment Successful</h2>
            <p>Your payment is successful.</p>
            <button onClick={handleCloseDialog} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;


import React from "react";
import "./SignupModal.css";

const SignUpModal = ({ onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal">
        <div className="modalHeader">
          <h3>Start listening with a free Spotify account</h3>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modalContent">{/* put buttons */}</div>
      </div>
    </div>
  );
};

export default SignUpModal;

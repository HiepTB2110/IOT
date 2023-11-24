import React from "react";
import "./Disable.css";

const Disable = (props) => {
  if (!props.isDisable) {
    return null;
  }
  return (
    <>
      <div className="main-container">
        <div className="modal-container">
          <h4>Do you want Disable ?</h4>
          <div>
            <button className="modal-footer-button modal-button-send">
              Ok
            </button>
            <button className="modal-footer-button modal-button-cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disable;

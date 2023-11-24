import React from "react";
import "./Headerr.css";
import { ref as RefDb, update } from "firebase/database";
import { db } from "../../firebase";

const Headerr = (props) => {
  const handleOpen = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(`Do you want to Open ?`);

    // Check if the user confirmed
    if (isConfirmed) {
      update(RefDb(db, `Door/door`), {
        status: 1,
      })
        .then(() => {
          console.log("ok");
          props.getDoor();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Disabling canceled.");
    }
  };

  const handleClose = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(`Do you want to Close ?`);

    // Check if the user confirmed
    if (isConfirmed) {
      update(RefDb(db, `Door/door`), {
        status: 0,
      })
        .then(() => {
          console.log("ok");
          props.getDoor();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Disabling canceled.");
    }
  };

  return (
    <div className="header-wrap">
      <div className="left">
        <span>
          <i class="fa-solid fa-outdent"></i>
        </span>
      </div>
      <div className="right">
        <span>Door Status:</span>
        <div className="card flex justify-content-center input-switch">
          {props.door === 0 ? (
            <button onClick={() => handleOpen()}>Opened</button>
          ) : (
            <button onClick={() => handleClose()}>Closed</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headerr;

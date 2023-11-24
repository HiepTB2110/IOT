import React from "react";
import "./Content.css";
import { db } from "../../firebase";
import { ref as RefDb, update } from "firebase/database";

const Content = (props) => {


  const handleDisable = (id) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(`Do you want to Disable ${id} ?`);
  
    // Check if the user confirmed
    if (isConfirmed) {
      console.log(id);
      update(RefDb(db, `Students/${id}`), {
        status: 0,
      })
        .then(() => {
          console.log("ok");
          props.getListdv();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Disabling canceled.");
    }
  };
  

  const handleActive = (id) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(`Do you want to Active ${id} ?`);

    // Check if the user confirmed
    if (isConfirmed) {
      console.log(id);
      update(RefDb(db, `Students/${id}`), {
        status: 1,
      })
        .then(() => {
          console.log("ok");
          props.getListdv();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Activation canceled.");
    }
  };

  return (
    <div>
      <table className="tab">
        <thead className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table">
          {props.data?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <img src={student.image} alt="" className="small-image" />
              </td>
              {student.status === 1 ? (
                <td>
                  <button onClick={() => handleDisable(student.id)}>
                    Disable
                  </button>
                </td>
              ) : (
                <td>
                  <button onClick={() => handleActive(student.id)}>
                    Active
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;

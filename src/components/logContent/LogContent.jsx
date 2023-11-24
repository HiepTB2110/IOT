import React from "react";
import "./LogContent.css";

const LogContent = (props) => {
  return (
    <div>
      <table className="tab">
        <thead className="table">
          <tr>
            <th>ID</th>
            <th>IsRead</th>
            <th>Content</th>
            <th>Image</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table">
          {props.data?.map((student) => (
            <tr key={student.idPerson}>
              <td>{student.idPerson}</td>
              <td>{student.isRead}</td>
              <td>{student.content}</td>
              <td>
                <img src={student.image} alt="" className="small-image" />
              </td>
              <td>{student.time}</td>
              <td>
                <button>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogContent;

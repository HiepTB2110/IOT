import React, { useState } from "react";
import "./Dialog.css";
import { ref as RefDb, set } from "firebase/database";
import { db, storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { uid } from "uid";

const Dialog = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const writeRealtime = (uuid) => {
    set(RefDb(db, `Students/${uuid}`), {
      id: uuid,
      name,
      status: 1,
    });
    setName("");
  };

  const write = () => {
    if (image === "" || name === "") return;
    const uuid = uid();

    // Upload the image to Firebase Storagev
    const storagePath = `Images/${uuid}.png`;
    const storageRef = ref(storage, storagePath);

    try {
      uploadBytes(storageRef, image).then(() => {
        writeRealtime(uuid);
        props.onConfirm();
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <div className="main-container">
        <div className="modal-container">
          <h3>Add Member</h3>
          <div className="modal-input-label">
            <label className="modal--input-text">Name</label>
            <input
              className="modal-input"
              type="text"
              placeholder="Name"
              onChange={handleName}
            />
            <label className="modal--input-text">Image</label>
            <input type="file" onChange={handleImage} />
          </div>
          <div>
            <button
              onClick={write}
              className="modal-footer-button modal-button-send"
            >
              Ok
            </button>
            <button
              onClick={() => props.onCancel()}
              className="modal-footer-button modal-button-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;

import React, { useEffect, useState } from "react";
import Content from "../content/Content";
import "./Container.css";
import Narbar from "../narbar/Narbar";
import { getListStudent } from "../../api";
import Dialog from "../dialog/Dialog";
import Headerr from "../header/Headerr";
import { get, ref as RefDb } from "firebase/database";
import { db } from "../../firebase";

const Container = () => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [door, setDoor] = useState();
  // const [images, setImages] = useState([]);

  // const getListdv = async () => {
  //   try {
  //     const response = await getListStudent();
  //     setData(Object.values(response));
  //   } catch (error) {
  //     console.error("Lỗi trong quá trình gửi yêu cầu API", error);
  //   }
  // };

  const getListdv = async () => {
    try {
      const response = await getListStudent();
      setData(Object.values(response));
      console.log(Object.values(response));
    } catch (error) {
      console.error("Lỗi trong quá trình gửi yêu cầu API", error);
    }
  };

  useEffect(() => {
    getListdv();
    getDoor();
  }, []);

  const handleCancelAdd = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleConfirmAdd = () => {
    setOpenDialog(false);
    getListdv();
  };

  const getDoor = async () => {
    get(RefDb(db, `Door`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().door.status);
          setDoor(snapshot.val().door.status)
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-wrap">
      <Narbar />
      <div className="content">
        <div className="header_wr">
          <button onClick={() => handleOpenDialog()}>Add Member</button>
          <Headerr door={door} getDoor={getDoor}/>
        </div>
        <Content data={data} getListdv={getListdv} />
      </div>
      {openDialog && (
        <Dialog
          isOpen={openDialog}
          onCancel={handleCancelAdd}
          onConfirm={handleConfirmAdd}
        />
      )}
    </div>
  );
};

export default Container;

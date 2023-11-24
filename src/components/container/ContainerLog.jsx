import React, { useEffect, useState } from "react";
import LogContent from "../logContent/LogContent";
import "./Container.css";
import Narbar from "../narbar/Narbar";
import { getListNotifications } from "../../api";

const ContainerLog = () => {
  const [data, setData] = useState([]);

  const getListdv = async () => {
    try {
      const response = await getListNotifications();
      setData(Object.values(response));
      console.log(Object.values(response));
    } catch (error) {
      console.error("Lỗi trong quá trình gửi yêu cầu API", error);
    }
  };

  useEffect(() => {
    getListdv();
  }, []);

  return (
    <div className="container-wrap">
      <Narbar />
      <div className="content">
        <LogContent data={data} />
      </div>
    </div>
  );
};

export default ContainerLog;

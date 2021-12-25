import React,{ useEffect, useState} from "react";
import "./UploadData.css";
import axios from "axios";


export default function UploadDataPage() {
  const [uploadfile, setUploadfile] = useState({});
  
  const handleSubmit = () => {
    var bodyFormData = new FormData();
  bodyFormData.append("uploadfile", uploadfile)
  
  axios({
    method: "post",
    url: "/uploadfile",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }


  return (
    <div className="upload_data_pageContainer">
      <div className="fileChooser_container">
      <form >
        <input
          type="file"
          name="uploadfile"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(e)=>setUploadfile(e.target.files[0])}
          className="filechooser"
        ></input>
        <input type="submit" className="btn" onClick={handleSubmit}></input>
      </form>
      </div>
    </div>
  );
}

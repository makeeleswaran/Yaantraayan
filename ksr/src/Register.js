import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Box,
  Grid,
  MenuItem,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");

  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    name: "",
    collageName: "",
    email: "",
    contactNumber: "",
    dob: "",
    collageid: "",
    district: "",
    eventName: "",
  
  });
  const [selectedFile, setSelectedFile] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDatas({ ...datas, [name]: value });
  
  };
 
  
  
console.log(selectedFile)
function handleSubmit(e) {
  e.preventDefault();
  const url = "http://192.168.29.172:3005";

  const formData = new FormData();
  formData.append("image", selectedFile);

  // Append other data to the formData
  Object.entries(datas).forEach(([key, value]) => {
    formData.append(key, value);
  });

  // Send the formData using axios
  axios.post(`${url}/user/profile/addProfile`, formData).then((res) => {
    setRender(!render);
    setDatas("");
  });
}
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          backgroundColor:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
          color: "",
        }}
      >
        <h1>Registration Form</h1>
        <TextField
          name="name"
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          placeholder="Enter the Name"
          onChange={handleChange}
        />

        <TextField
          name="collegeName"
          id="outlined-textarea"
          label="College Name"
          placeholder="Enter the College Name"
          multiline
          onChange={handleChange}
        />

        <TextField
          name="email"
          id="outlined-textarea"
          label="Email"
          placeholder="Enter the Email"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="contactNumber"
          id="outlined-textarea"
          label="Contact"
          placeholder="Enter the Contact"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="dob"
          id="outlined-textarea"
          label="DOB"
          placeholder="Enter the dob"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="district"
          id="outlined-textarea"
          label="District "
          placeholder="Enter the District"
          multiline
          onChange={handleChange}
        />
        <TextField
          name="collegeId"
          id="outlined-textarea"
          label="CollegeID"
          placeholder="Enter the collageId"
          multiline
          onChange={handleChange}
        />

        <TextField
          name="eventName"
          id="outlined-textarea"
          label="EventName"
          placeholder="Enter the EventName"
          multiline
          onChange={handleChange}
        />
        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider> */}

        <Button
          variant="contained"
          color="success"
          style={{ textDecoration: "none" }}
          type="submit"
          onClick={handleSubmit}
        >
          Success
        </Button>
      </div>
      <div></div>
    </Box>
  );
}

export default Register;

var mydata = [
  {
    name: "mouli",
    age: 12,
  },
  {
    name: "mouli",
    age: 12,
  },
  {
    name: "mouli",
    age: 12,
  },
];

var myData = mydata.map((number) => {
  return number.name === "mouli";
});
console.log(myData);

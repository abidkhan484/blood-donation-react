import axios from "axios";
import { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";

export default function Registraion() {
  const [name, setName] = useState("");
  const [bloodG, setBloodGroup] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmailId] = useState("");
  const [lastDonation, setlastDonationDate] = useState("");

  const handleSubmit = () => {
    const postData = {
      'name': name,
      'bloodGroup': bloodG,
      'phone': phone,
      'email': email,
      'lastDonationDate': lastDonation,
    }

    console.log(postData);
    axios.post("http://localhost:8000/api/v1/donors/", postData).then((response) => {
      console.log(response);
      if (response.status != 201) {
        console.log("created");
      }
      else {
        console.log("not created");
      }
    })
  }
  const handleReset = () => {
    setName("")
    setBloodGroup("")
    setPhoneNumber("")
    setEmailId("")
    setlastDonationDate("")
  }

  return (
    <Box
      component="form"
      sx={{
        m: 1, width: "25ch" 
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="bg"
          label="Blood Group"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setBloodGroup(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="phone"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="email"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setEmailId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="lastDonation"
          label="Last Donation Date"
          variant="standard"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=> setlastDonationDate(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={handleSubmit} variant="outlined">
          Add Donor
        </Button>
        <Button onClick={handleReset} variant="outlined">
          Reset
        </Button>
      </div>
    </Box>
  )
}

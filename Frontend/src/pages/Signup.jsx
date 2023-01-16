import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (firstName && name && email && birthdate && password) {
        let userToCreate = {
          firstname: firstName,
          name: name,
          email: email,
          birthdate: birthdate,
          password: password,
        };
        console.log("userToCreate ", userToCreate);
        const response = await axios.post(
          "http://localhost:3000/signup",
          userToCreate
        );
        console.log(response.data);
        if (response.data) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      className="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
        },
      }}
    >
      <h2>Inscription</h2>
      {/* <div> */}
      <TextField
        required
        fullWidth
        id="outlined-prénom"
        label="Prénom"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        required
        id="outlined-nom"
        label="Nom"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        required
        id="outlined-email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        required
        id="outlined-birthdate"
        label="date de naissance"
        placeholder="AAAA-MM-JJ"
        value={birthdate}
        onChange={(event) => setBirthdate(event.target.value)}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* </div> */}
      <Button variant="contained" type="submit">
        Envoyer
      </Button>
    </Box>
  );
};

export default Signup;

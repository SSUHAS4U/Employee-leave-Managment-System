import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent, Snackbar, Alert } from '@mui/material';

const AddEmployee = ({ handleSnackbarOpen }) => {
  const [ID, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ID || !name || !department || !mobilenumber || !mail) {
      setError("All fields are required");
      return;
    }

    const data = {
      ID,
      name,
      department,
      mobilenumber,
      mail
    };

    try {
      const response = await axios.post('http://localhost:5000/addemployee', data);
      console.log("Server Response:", response.data);
      setId('');
      setName('');
      setDepartment('');
      setMobileNumber('');
      setMail('');
      setError('');
      setSnackbarOpen(true);
      handleSnackbarOpen("Employee added successfully");
    } catch (err) {
      console.error("Error in posting data: ", err.message);
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Failed to add employee. Please try again.");
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      
      <Card style={{ 
         backgroundColor: 'black',
         margin: 'auto',
         marginTop:'95px',
         width: '80%', 
         maxWidth: '800px', 
         padding: '20px', 
         textAlign: 'left',
         border: '2px solid yellow', 
         borderRadius: '10px' ,
         boxShadow: '0 0 40px rgba(255, 255, 0, 1)',
        }}>
        <CardContent style={{ padding: 30 }}>
          <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="id" style={{ color: 'yellow' }}>ID *</InputLabel>
          <Input
            id="id"
            value={ID}
            onChange={(e) => setId(e.target.value)}
            required
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
           <InputLabel htmlFor="name" style={{ color: 'yellow' }}>Name *</InputLabel>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
  
          <InputLabel htmlFor="department" style={{ color: 'yellow' }}>Department *</InputLabel>
          <Input
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
  
          <InputLabel htmlFor="mobileNumber" style={{ color: 'yellow' }}>Mobile Number *</InputLabel>
          <Input
            id="mobileNumber"
            value={mobilenumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
  
          <InputLabel htmlFor="mail" style={{ color: 'yellow' }}>Mail *</InputLabel>
          <Input
            id="mail"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
  

          <Button type="submit" variant="contained" style={{ marginTop: '10px', backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}>
            Add Employee
          </Button>
            {error && (
              <FormHelperText error style={{ marginTop: 2 }}>
                {error}
              </FormHelperText>
            )}
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" color='success'>
          Employee added successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddEmployee;

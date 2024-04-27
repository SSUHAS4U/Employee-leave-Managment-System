import React, { useState } from 'react';
import axios from 'axios';
import {  InputLabel, Input, FormHelperText, Button, TextField, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { InputAdornment, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';



const Leave = () => {
  const [ID, setId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [mail, setMail] = useState('');
  const [leaveStartDate, setLeaveStartDate] = useState('');
  const [leaveEndDate, setLeaveEndDate] = useState('');
  const [reasonForLeave, setReasonForLeave] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ID || !name || !department || !mobilenumber || !mail || !leaveStartDate || !leaveEndDate || !reasonForLeave) {
      setError("All fields are required");
      return;
    }

    const data = {
      ID,
      name,
      department,
      mobilenumber,
      mail,
      leaveStartDate,
      leaveEndDate,
      reasonForLeave
    };

    try {
      const response = await axios.post('http://localhost:5000/applyleave', data);
      console.log("Server Response:", response.data);
      setId('');
      setName('');
      setDepartment('');
      setMobileNumber('');
      setMail('');
      setLeaveStartDate('');
      setLeaveEndDate('');
      setReasonForLeave('');
      setError('');
      handleSnackbarOpen('success', 'Leave applied successfully');
    } catch (err) {
      console.error("Error in posting data: ", err.message);
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Failed to apply leave. Please try again.");
      } else {
        setError("Failed to apply leave. Please try again.");
      }
      handleSnackbarOpen('error', err.message || 'Failed to apply leave. Please try again.');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSnackbarOpen = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  return (
    <div style={{ 
    margin:'-100px auto 0', 
    minHeight: '120vh',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    boxShadow: '0px 0px 0px yellow',
    }}>
      <div style={{ 
        backgroundColor: 'black',
        width: '80%', 
        maxWidth: '800px', 
        padding: '20px', 
        textAlign: 'left',
        border: '2px solid yellow', 
        borderRadius: '10px' ,
        boxShadow: '0 0 40px rgba(255, 255, 0, 1)',
        }}>
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
  
          <div>
            <InputLabel htmlFor="leaveStartDate" style={{ color: 'yellow' }}>Leave Start Date *</InputLabel>
            <TextField
              id="leaveStartDate"
              type="datetime-local"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                style: { color: 'yellow' }
              }}
              InputProps={{
                style: { color: 'yellow' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton style={{ color: 'yellow' }}>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '2px', marginBottom: '5px', width: '100%' }}
            />
          </div>
  
          <div>
            <InputLabel htmlFor="leaveEndDate" style={{ color: 'yellow' }}>Leave End Date *</InputLabel>
            <TextField
              id="leaveEndDate"
              type="datetime-local"
              value={leaveEndDate}
              onChange={(e) => setLeaveEndDate(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
                style: { color: 'yellow' }
              }}
              InputProps={{
                style: { color: 'yellow' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton style={{ color: 'yellow' }}>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '2px', marginBottom: '5px', width: '100%' }}
            />
          </div>
  
          <InputLabel htmlFor="reasonForLeave" style={{ color: 'yellow' }}>Reason for Leave *</InputLabel>
          <Input
            id="reasonForLeave"
            value={reasonForLeave}
            onChange={(e) => setReasonForLeave(e.target.value)}
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
  
          <Button type="submit" variant="contained" style={{ marginTop: '10px', backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}>
            Apply Leave
          </Button>
  
          {error && (
            <FormHelperText error style={{ marginTop: '10px', color: 'yellow' }}>
              {error}
            </FormHelperText>
          )}
        </form>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};  

export default Leave;
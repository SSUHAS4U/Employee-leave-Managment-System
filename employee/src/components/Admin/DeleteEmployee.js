import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent, Snackbar, Alert } from '@mui/material';

const DeleteEmployee = ({ handleSnackbarOpen }) => {
  const [ID, setId] = useState('');
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ID) {
      setError('ID is required');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/deleteemployee/${ID}`);
      console.log('Server Response:', response.data);
      setId('');
      setError('');
      setSnackbarOpen(true);
      handleSnackbarOpen("Employee deleted successfully");
    } catch (err) {
      console.error('Error in deleting employee: ', err.message);
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Failed to delete employee. Please try again.');
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
        marginTop:'150px',
        width: '80%', 
        maxWidth: '800px', 
        padding: '20px', 
        textAlign: 'left',
        border: '2px solid yellow', 
        borderRadius: '10px' ,
        boxShadow: '0 0 40px rgba(255, 255, 0, 1)',
        }}>
        <CardContent style={{ padding: 24 }}>
          <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="id" style={{ color: 'yellow' }}>ID *</InputLabel>
          <Input
            id="id"
            value={ID}
            onChange={(e) => setId(e.target.value)}
            required
            style={{ color: 'yellow', border: '1px solid yellow', borderRadius: '5px', padding: '10px', marginBottom: '10px', width: '100%' }}
          />
          <Button type="submit" variant="contained" style={{ marginTop: '10px', backgroundColor: 'yellow', color: 'black', fontWeight: 'bold', alignItems:'center' }}>
            Delete Employee
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
          Employee deleted successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default DeleteEmployee;

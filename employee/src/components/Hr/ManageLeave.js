import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, Snackbar, Alert } from '@mui/material';

const ManageLeave = () => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:5000/manageleave');
        // Set the initial status to 'Pending' for each leave
        const leavesWithStatus = response.data.map(leave => ({ ...leave, status: 'Pending' }));
        setLeaves(leavesWithStatus);
        setError('');
      } catch (err) {
        console.error('Error fetching leaves: ', err.message);
        setError('Failed to fetch leaves. Please try again.');
      }
    };

    fetchLeaves();
  }, []);

  const handleAccept = (index) => {
    setLeaves(prevLeaves => {
      const updatedLeaves = [...prevLeaves];
      updatedLeaves[index].status = 'Accepted';
      return updatedLeaves;
    });
    openSnackbar('Leave Accepted', 'success');
  };

  const handleReject = (index) => {
    setLeaves(prevLeaves => {
      const updatedLeaves = [...prevLeaves];
      updatedLeaves[index].status = 'Rejected';
      return updatedLeaves;
    });
    openSnackbar('Leave Rejected', 'error');
  };

  const openSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const dateString = dateObj.toLocaleDateString();
    const timeString = dateObj.toLocaleTimeString();
    return `${dateString}<br/>${timeString}`;
  };

  return (
    <>
      <Card style={{ 
        width: '70%', 
        margin: 'auto', 
        backgroundColor: 'black', 
        border: '2px solid yellow', 
        borderRadius: '10px' ,
        boxShadow: '0 0 40px rgba(255, 255, 0, 1)',
        }}>
        <CardContent style={{ padding: 24, minHeight: 400 }}>
          <Typography variant="h5" component="h2" gutterBottom color="yellow">
            Manage Leaves
          </Typography>
          {error ? (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: '10%' ,color: 'yellow'}}>ID</TableCell>
                    <TableCell sx={{ width: '20%' ,color: 'yellow' }}>Name</TableCell>
                    <TableCell sx={{ width: '15%' ,color: 'yellow'}}>Department</TableCell>
                    <TableCell sx={{ width: '20%' ,color: 'yellow'}}>Start Date</TableCell>
                    <TableCell sx={{ width: '20%' ,color: 'yellow'}}>End Date</TableCell>
                    <TableCell sx={{ width: '20%' ,color: 'yellow'}}>Reason</TableCell>
                    <TableCell sx={{ width: '10%' ,color: 'yellow'}}>Status</TableCell>
                    <TableCell sx={{ width: '10%' ,color: 'yellow'}}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaves.map((leave, index) => (
                    <TableRow key={index}>
                      <TableCell>{leave.ID}</TableCell>
                      <TableCell>{leave.name}</TableCell>
                      <TableCell>{leave.department}</TableCell>
                      <TableCell dangerouslySetInnerHTML={{ __html: formatDate(leave.leaveStartDate) }}></TableCell>
                      <TableCell dangerouslySetInnerHTML={{ __html: formatDate(leave.leaveEndDate) }}></TableCell>
                      <TableCell>{leave.reasonForLeave}</TableCell>
                      <TableCell>{leave.status}</TableCell>
                      <TableCell>
                        <Button disabled={leave.status === 'Accepted'} onClick={() => handleAccept(index)}>Accept</Button>
                        <Button disabled={leave.status === 'Rejected'} onClick={() => handleReject(index)}>Reject</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ManageLeave;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const LeaveTaken = () => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:5000/leavestaken');
        setLeaves(response.data);
        setError(''); // Reset error state on success
      } catch (err) {
        console.error('Error fetching leaves: ', err.message);
        setError('Failed to fetch leaves. Please try again.');
      }
    };

    fetchLeaves();
  }, []);

  return (
    <Card style={{ 
      width: '70%', 
      margin: 'auto', 
      backgroundColor: 'black', 
      border: '2px solid yellow', 
      borderRadius: '10px' ,
      boxShadow: '0 0 40px rgba(255, 255, 0, 1)',
      }}>
      <CardContent style={{ padding: 24, minHeight: 400, color: 'yellow' }}>
        <Typography variant="h5" component="h2" gutterBottom color="yellow">
          Leaves Taken
        </Typography>
        {error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : (
          <TableContainer>
            <Table style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'yellow' }}>ID</TableCell>
                  <TableCell style={{ color: 'yellow' }}>Name</TableCell>
                  <TableCell style={{ color: 'yellow' }}>Department</TableCell>
                  <TableCell style={{ color: 'yellow' }}>Start Date</TableCell>
                  <TableCell style={{ color: 'yellow' }}>End Date</TableCell>
                  <TableCell style={{ color: 'yellow' }}>Reason</TableCell>
                  <TableCell style={{ color: 'yellow' }}>Status</TableCell> {/* Add a new cell for status */}
                </TableRow>
              </TableHead>
              <TableBody>
                {leaves.map((leave, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ color: 'yellow' }}>{leave.ID}</TableCell>
                    <TableCell style={{ color: 'yellow' }}>{leave.name}</TableCell>
                    <TableCell style={{ color: 'yellow' }}>{leave.department}</TableCell>
                    <TableCell style={{ color: 'yellow' }}>{new Date(leave.leaveStartDate).toLocaleDateString()}</TableCell>
                    <TableCell style={{ color: 'yellow' }}>{new Date(leave.leaveEndDate).toLocaleDateString()}</TableCell>
                    <TableCell style={{ color: 'yellow' }}>{leave.reasonForLeave}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default LeaveTaken;

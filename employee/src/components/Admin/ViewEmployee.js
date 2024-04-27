import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import './ViewEmployee.css'; // Import CSS file for styling

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/viewemployees');
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees: ", err.message);
        setError("Failed to fetch employees. Please try again.");
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="employee-container"> {/* Container to align employees to left */}
      <Typography variant="h5" gutterBottom>
        Employees Data
      </Typography>
      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}
      {employees.map(employee => (
        <Card key={employee.ID} className="employee-card"> {/* Apply styles from CSS */}
          <CardContent>
            <Typography variant="h6" className="yellow-text">
              ID: {employee.ID}
            </Typography>
            <Typography variant="body1" className="yellow-text">
              Name: {employee.name}
            </Typography>
            <Typography variant="body1" className="yellow-text">
              Department: {employee.department}
            </Typography>
            <Typography variant="body1" className="yellow-text">
              Mobile Number: {employee.mobilenumber}
            </Typography>
            <Typography variant="body1" className="yellow-text">
              Mail: {employee.mail}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewEmployee;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from the backend
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.employee_id}</td>
              <td>{emp.contact}</td>
              <td>{emp.department_id}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDashboard;
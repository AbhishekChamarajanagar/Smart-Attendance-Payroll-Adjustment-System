const db = require('../db');

const getEmployees = async (req, res) => {
  console.log('Request to /api/employees received'); // Log when the endpoint is hit
  try {
    const result = await db.query('select * from employees');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    res.status(500).json({ error: error.message });
  }
};

const addEmployee = async (req, res) => {
  const { name, employee_id, contact, department_id, role } = req.body;
  try {
    await db.query(
      'INSERT INTO employees (name, employee_id, contact, department_id, role) VALUES ($1, $2, $3, $4, $5)',
      [name, employee_id, contact, department_id, role]
    );
    res.json({ message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, contact, department_id, role } = req.body;
  try {
    await db.query(
      'UPDATE employees SET name = $1, contact = $2, department_id = $3, role = $4 WHERE id = $5',
      [name, contact, department_id, role, id]
    );
    res.json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM employees WHERE id = $1', [id]);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEmployees, addEmployee, updateEmployee, deleteEmployee };
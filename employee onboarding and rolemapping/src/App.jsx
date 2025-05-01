import React, { useState, useEffect } from "react";


function App() {
  const [formData, setFormData] = useState({
    employee_id: "",
    name: "",
    contact: "",
    department_id: "",
    role_id: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/employees/add", formData);
    alert("Employee added!");
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
        background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #fff;
      }

      .app-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        z-index: 2;
      }

      /* Better shooting stars with blur and light trail */
      .shooting-star {
        position: absolute;
        width: 150px;
        height: 2px;
        background: linear-gradient(90deg, white, transparent);
        opacity: 0.8;
        filter: blur(1px);
        transform: rotate(-45deg);
        animation: shoot 3s linear infinite;
      }

      .shooting-star:nth-child(1) { top: 10%; left: -200px; animation-delay: 0s; }
      .shooting-star:nth-child(2) { top: 20%; left: -250px; animation-delay: 1.5s; }
      .shooting-star:nth-child(3) { top: 40%; left: -180px; animation-delay: 3s; }
      .shooting-star:nth-child(4) { top: 60%; left: -300px; animation-delay: 4.5s; }
      .shooting-star:nth-child(5) { top: 75%; left: -220px; animation-delay: 6s; }

      @keyframes shoot {
        0% {
          transform: translateX(0) translateY(0) rotate(-45deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translateX(600px) translateY(600px) rotate(-45deg);
          opacity: 0;
        }
      }

      .form-container {
        background: rgba(255, 255, 255, 0.9);
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        max-width: 420px;
        width: 90%;
        position: relative;
        z-index: 3;
        color: #333;
      }

      .form-title {
        text-align: center;
        margin-bottom: 24px;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .form input {
        padding: 12px 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
      }

      .form input:focus {
        border-color: #007bff;
        outline: none;
      }

      .form button {
        padding: 14px;
        background: linear-gradient(to right, #007bff, #0056d2);
        color: white;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
      }

      .form button:hover {
        background: linear-gradient(to right, #0056d2, #003c9e);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      {/* Shooting Stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      {/* Form UI */}
      <div className="app-wrapper">
        <div className="form-container">
          <div className="form-title">🌠 Employee Onboarding</div>
          <form onSubmit={handleSubmit} className="form">
            <input name="employee_id" placeholder="ID" onChange={handleChange} />
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="contact" placeholder="Contact" onChange={handleChange} />
            <input name="department_id" placeholder="Dept ID" onChange={handleChange} />
            <input name="role_id" placeholder="Role ID" onChange={handleChange} />
            <button type="submit">Add Employee</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

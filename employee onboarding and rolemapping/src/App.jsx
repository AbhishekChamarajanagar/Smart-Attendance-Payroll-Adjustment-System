import React, { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    employee_id: "",
    name: "",
    contact: "",
    department_id: "",
    role_id: ""
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: #000;
        overflow: hidden;
      }

      .app-wrapper {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        padding: 20px;
      }

      .form-container {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        border-radius: 20px;
        padding: 32px;
        box-shadow: 0 0 30px rgba(0,0,0,0.6);
        color: white;
        max-width: 420px;
        width: 100%;
        animation: fadeInUp 1.5s ease;
      }

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .form-title {
        text-align: center;
        font-size: 1.7rem;
        font-weight: bold;
        margin-bottom: 24px;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .form input {
        padding: 12px 16px;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        background: rgba(255, 255, 255, 0.15);
        color: white;
        outline: none;
      }

      .form input::placeholder {
        color: #cccccc;
      }

      .form button {
        padding: 14px;
        background: linear-gradient(to right, #00c6ff, #0072ff);
        color: white;
        font-weight: bold;
        font-size: 1rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .form button:hover {
        background: linear-gradient(to right, #0072ff, #00c6ff);
        transform: scale(1.03);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      {/* Shooting Star Particle Background */}
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000000" },
            image: "none",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50, // Reduced particle count for more dramatic shooting stars
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff", // White color for stars
            },
            shape: {
              type: "star", // Set shape to star for shooting stars
            },
            opacity: {
              value: 0.8, // More opacity to make the stars visible
              random: true,
            },
            size: {
              value: 4, // Larger size for shooting stars
              random: true,
              animation: {
                enable: false,
              },
            },
            move: {
              enable: true,
              speed: 10, // Fast movement for shooting stars
              direction: "random", // Random movement direction
              random: true,
              straight: true, // Move in a straight line
              outModes: {
                default: "out", // Particles disappear when out of screen
              },
            },
            links: {
              enable: false, // Disable links between particles
            },
            life: {
              duration: 0.5, // Short life for the shooting stars
              count: 1, // Only one shooting star per particle
              delay: 0, // No delay
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                links: {
                  opacity: 0.6,
                },
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          height: "100vh",
          width: "100vw",
        }}
      />

      {/* Glass Form */}
      <div className="app-wrapper">
        <div className="form-container">
          <div className="form-title">🌌 Employee Onboarding</div>
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

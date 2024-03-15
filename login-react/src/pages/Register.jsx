import React, { useState } from "react";
import img from "../images/images.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

import "../styles/Register.css";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();

  const handleInputChange = ({ target: { name, value } }) => {
    setUserRegister({ ...userRegister, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userRegister.email, userRegister.password);
  };

  const handleCheckboxChange = () => setShowPassword(!showPassword);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-md-6 col-12 login-section">
          <h1 className="text-center">Registro</h1>
          <div className="container">
            <form className="p-5 form" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={handleInputChange}
                  name="firstName"
                  type="text"
                  className="form-control rounded-pill"
                  id="floatingFirstName"
                  placeholder="Nombre"
                />
                <label htmlFor="floatingFirstName">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleInputChange}
                  name="lastName"
                  type="text"
                  className="form-control rounded-pill"
                  id="floatingLastName"
                  placeholder="Apellido"
                />
                <label htmlFor="floatingLastName">Apellido</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  className="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Dirección de correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleInputChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  id="floatingPassword"
                  placeholder="Contraseña"
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="showPassword"
                  onChange={handleCheckboxChange}
                  checked={showPassword}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  Mostrar contraseña
                </label>
              </div>
              <div className="d-grid w-50">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Registrarse
                </button>
                <Link className="mt-5" to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="lucide lucide-arrow-left-to-line"
                  >
                    <path d="M3 19V5" />
                    <path d="m13 6-6 6 6 6" />
                    <path d="M7 12h14" />
                  </svg>
                  Volver al login
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6 welcome-section d-none d-md-flex">
          <div className="contenedor">
            <p>Hola,</p>
            <ul>
              <li>Bienvenido</li>
              <li>Al</li>
              <li>Registro</li>
            </ul>
          </div>
          <img src={img} className="img" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

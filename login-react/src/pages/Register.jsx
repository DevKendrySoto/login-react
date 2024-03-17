import React, { useState } from "react";
import img from "../images/images.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import  AlertNotification  from "../components/Alert";

import "../styles/Register.css";

function RegisterForm() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setUserRegister({ ...userRegister, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signup(userRegister.email, userRegister.password);
      AlertNotification( "Usuario registrado correctamente", 'success'); 
      navigate("/login");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'El correo electrónico ya está siendo utilizado por otra cuenta.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'La contraseña es incorrecta para el correo electrónico proporcionado.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Se produjo un error de red. Por favor, verifica tu conexión a internet e inténtalo de nuevo.';
          break;
        default:
          errorMessage = 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.';
      }
      setError(errorMessage);
    }
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
                  required
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
                  required
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
                  required
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
                  required
                  onChange={handleInputChange}
                  minLength={6}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  id="floatingPassword"
                  placeholder="Contraseña"
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              {error && (
                <div className="alert alert-danger text-muted border border-danger rounded-pill">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-2 lucide lucide-circle-alert"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  {error}
                </div>
              )}
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
